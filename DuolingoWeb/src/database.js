const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose.connect(
  'mongodb+srv://Amanda:menudo@proyectobd2.m0wen.mongodb.net/<ProyectoBD2>?retryWrites=true&w=majority',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )
  .then(db => console.log("Conectó"))
  .catch(err => console.error(err));
