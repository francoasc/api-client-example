import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/test-node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(">> Database is connected"))
  .catch((err) => console.error(err));
