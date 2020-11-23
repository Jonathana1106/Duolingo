const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jonathan:computadores@proyectobd2.m0wen.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));