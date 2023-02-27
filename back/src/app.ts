import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index";
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(8000, () => console.log("Listening on http://localhost:8000"));
