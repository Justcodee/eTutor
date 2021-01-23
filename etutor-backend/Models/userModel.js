const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  LastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  Gender: { type: String, required: true, enum: ['Male', 'Female'] },
  Email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  Password: {
    type: String,
    minLength: 6,
    required: [true, 'password is required'],
  },
  Phone: { type: String, required: true },
  Photo: String,
  Role: {
    type: String,
    enum: ['Student', 'Lecturer', 'Admin'],
    default: 'Student',
  },
  //Lecurer fields
  Title: { type: String, enum: ['Mr', 'Mrs', 'Miss', 'Engr', 'Prof'] },

  //Student fields
  MatricNumber: String,
  Department: {
    type: String,
    Enum: ['Computer Science', 'Mathematics'],
  },
  Level: { type: Number, Enum: [100, 200, 300, 400] },
  RegisteredCourse: Number,
  Course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

userSchema.pre('save', function (next) {
  if (this.Role === 'Student') {
    const randomVal = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    this.MatricNumber = `0907ET${randomVal}`;
  }
  next();
});

userSchema.pre('save', async function (next) {
  //only runs if the password is modified
  if (!this.Password || !this.isModified('Password')) return next();

  //hash password
  this.Password = await bcrypt.hash(this.Password, 10);

  next();
});

userSchema.methods = {
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      'thisisjustarandomstringfornow'
    );
  },
  toJSON() {
    return {
      _id: this._id,
      // userName: this.Email,
      token: `JWT ${this.createToken()}`,
    };
  },
};

// userSchema.methods.toJson = function () {
//   //a method that returns user info in an object without password

//   const user = this;
//   const userObj = user.toObject();
//   delete userObj.Password;
//   return userObj;
// };

userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

userSchema.static.checkForField = async (field, value) => {
  const checkField = await User.findOne({ [`${field}`]: value });
  return checkField;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
