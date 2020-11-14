const express = require('express');
const path = require('path');
const expreshbs = require('express-handlebars');
const methodOverride = require('method-override');
const sesion = require('express-session');
const flash = require('connect-flash');
const passport= require('passport');

// Initializations
const app = express();
require('./database');
require('/config/passport');

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expreshbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(sesion({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/admins'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
app.use(require('./routes/busquedas'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server in running
app.listen(app.get('port'), () => {
    console.log('Servert on port', app.get('port'));
});