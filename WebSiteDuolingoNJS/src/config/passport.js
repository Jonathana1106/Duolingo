const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new localStrategy({
    usernameField: 'email'
}, async (email, passport, done) => {
    const user = await User.findOne({email: email});
    if (! user) {
        return done(null, false, {message: 'Usuario incorrecto'});
    } else {
        const match = await User.matchPassword(password);
        if (match){
            return done(null,user);
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id, (err,user) => {
        done(err,user);
    });
});
