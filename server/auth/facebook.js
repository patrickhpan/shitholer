const url = require('url')
const FacebookStrategy = require('passport-facebook').Strategy;
const getPFP = require('../apis/getPFP');

function facebook(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: url.resolve(process.env.APP_DEPLOY_URL, "/auth/fb/callback")
        },
        function (accessToken, refreshToken, profile, cb) {
            profile.token = accessToken;
            return cb(null, profile)
        }
    ));
    return passport;

}


module.exports = facebook;