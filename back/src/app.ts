import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index";
import { connectToDB } from "./connection";
require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:8000`)
);
connectToDB();
