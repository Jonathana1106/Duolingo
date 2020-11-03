const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose
  .connect(
    "mongodb://Amanda:<password>@proyectobd2-shard-00-00.m0wen.mongodb.net:27017,proyectobd2-shard-00-01.m0wen.mongodb.net:27017,proyectobd2-shard-00-02.m0wen.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-13el9o-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log("Conectó"))
  .catch((err) => console.error(err));
