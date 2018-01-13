const passport = require('passport');
const facebook = require('./facebook');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

facebook(passport);

module.exports = passport;