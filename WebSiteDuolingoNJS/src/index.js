const express = require('express');
const path = require('path');
const expreshbs = require('express-handlebars');
const methodOverride =  require('method-override');
const sesion = require('express-session');


// Initializations
const app = express();
require('./database');

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
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(sesion({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


// Global variables

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