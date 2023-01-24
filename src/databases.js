const mongoose = require("mongoose");

const { APP_NOTAS_MONGODB_HOST, APP_NOTAS_MONGODB_DATABASE } = process.env;
const MONGODB_URI = APP_NOTAS_MONGODB_HOST + "/" + APP_NOTAS_MONGODB_DATABASE;

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI, {})
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
