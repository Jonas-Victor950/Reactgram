import Conection from "./Conection";
import mongoose from "mongoose";
import authDB from "./default";

mongoose.set("strictQuery", true);

mongoose.connect(
  `mongodb+srv://${authDB.user}:${authDB.pass}@cluster0.gjxg1sw.mongodb.net/?retryWrites=true&w=majority`
);
const mongoDB = new Conection(
  `mongodb+srv://${authDB.user}:${authDB.pass}@cluster0.gjxg1sw.mongodb.net/?retryWrites=true&w=majority`
);

export default mongoDB;
