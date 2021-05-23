<template>
<div class="container">
 <div class="see">
    <div class="heading">
      <img src="../assets/graduate.svg" alt="" srcset="" width="50px" height="50px">
    <h4> eTutor </h4>
  </div>
   <div class="typeof">
     <div class="student">
<input type="radio" checked name="user" id="studentbox" @click="studentChange"
@change="onChange($event)" value="Student">
 <label for="studentbox">Student</label>
     </div>
 <div class="lecturer">
<input type="radio" name="user" id="lecturerbox" @click="lecturerChange"
 @change="onChange($event)" value="Lecturer">
 <label for="lecturerbox">Lecturer</label>
 </div>
   </div>
   <label for="firstName">First Name</label>
   <input type="text" name="firstName" id="firstName" v-model="firstname">
   <label for="surname">Surname</label>
   <input type="text" name="surname" id="surname" v-model="surname">
   <label for="email">Email</label>
  <input type="email" v-model="email" />
  <label for="password">Password</label>
  <input type="password" v-model="password" />
  <label for="gender">Gender</label>
  <input type="text" list="genders" name="gender" id="gender" v-model="gender">
   <datalist id="genders">
<option value="Male"></option>
<option value="Female"></option>
  </datalist>
  <label for="phone">Phone</label>
  <input type="tel" name="phone" id="phone" v-model="phone">
  <label for="departments">Department</label>
  <input type="text" list="departments" v-model="department">
  <datalist id="departments">
<option value="Computer Engineering">communicate</option>
<option value="Mass Communication"></option>
  </datalist>
  <label for="levels" v-if="student">Level</label>
  <input type="text" list="levels" v-if="student" v-model="level">
  <datalist id="levels">
<option value="100"></option>
<option value="200"></option>
<option value="300"></option>
<option value="400"></option>
<option value="500"></option>
  </datalist>
  <label for="courses" v-if="lecturer">Course</label>
  <input type="text" list="courses" v-if="lecturer" v-model="course">
  <datalist id="courses">
<option value="Vector Analysis"></option>
<option value="Data Analysis"></option>
<option value="Trigonometry"></option>
<option value="Java programing language "></option>
  </datalist>
  <button @click="register" id="btn">Sign Up</button>
  </div>
</div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      email: 'tell her',
      password: '',
      role: 'Student',
      student: true,
      lecturer: false,
      gender: '',
      level: '',
      course: '',
      firstname: '',
      surname: '',
      department: '',
      phone: '',
    };
  },

  methods: {
    async register() {
      const testing = {
        FirstName: this.firstname,
        LastName: this.surname,
        Gender: this.gender,
        Email: this.email,
        Password: this.password,
        Phone: this.phone,
        Role: this.role,
        Department: this.department,
        Level: Number(this.level),
      };
      const response = await AuthService.register(testing);
      // const testing = {
      //   FirstName: this.firstname,
      //   LastName: this.surname,
      //   Gender: this.gender,
      //   Email: this.email,
      //   Password: this.password,
      //   Phone: this.phone,
      //   Role: this.role,
      //   Department: this.department,
      //   Level: Number(this.level),
      // };
      console.log(response.data);
      console.log(testing);
    },
    onChange(event) {
      this.role = event.target.value;
      console.log(this.role);
    },
  },
};
</script>

<style scoped>
.heading{
  text-align: center;
  color: rgb(1, 1, 22);
  margin-bottom: 10px;
}
.typeof{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
}
#studentbox{
  margin-right: 5px;
}
#lecturerbox{
  margin-right: 5px;
}
.container{
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.see{
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 50px;
  min-width: 100px;
  padding: 2%;
  border-radius: 10px;
}
#btn{
  color: white;
  background-color: blue;
}
input[type = "text"],input[type="password"],input[type="email"],input[type="tel"]
{
  width: 100%;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
   padding: 5px 20px;
}
input[type = "text"]:focus ,input[type="password"]:focus,
input[type="email"]:focus,input[type="tel"]:focus
{
  outline: none;
}

label{
  margin-bottom: 3px;
}
#btn{
  border-radius: 20px;
  height: 30px;
 margin-top: 20px;
 margin-bottom: 10px;
 padding: auto;
 background-color: hsl(36, 84%, 40%);
}
</style>
