const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const LocalStrategy = require('passport-local');

const User = require('../Models/userModel');

//local strategy
const localStrategy = new LocalStrategy(
  { usernameField: 'Email', passwordField: 'Password' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ Email: email });

      if (!user) {
        return done(null, false);
      } else if (!user.isValidPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
);

//jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: 'thisisjustarandomstringfornow',
};

const jwtStrategy = new Strategy(jwtOpts, async (payload, done) => {
  try {
    //identify user by id
    const user = await User.findById(payload._id);

    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

exports.authLocal = passport.authenticate('local', { session: false });
exports.authJwt = passport.authenticate('jwt', { session: false });
