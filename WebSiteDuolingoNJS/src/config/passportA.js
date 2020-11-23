const passportA = require('passport');

const localStrategy = require('passport-local').Strategy;

const Admin = require('../models/Admin');

passportA.use(new localStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
        return done(null, false, { message: 'Administrador no encontrado' });
    } else {
        const match = await admin.matchPassword(password);
        if (match) {
            return done(null, admin);
        } else {
            return done(null, false, { message: 'Contraseña incorrecta' });
        }
    }

}));

passportA.serializeUser((admin, done) => {
    done(null, admin.id);
});

passportA.deserializeUser((id, done) => {
    Admin.findById(id, (err, admin) => {
        done(err, admin);
    });
});
