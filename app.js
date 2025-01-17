import express from "express";
import bodyParser from "body-parser";
import connection from "./src/db/db.js";
import Instrouter from './src/routes/instRoutes.js';
import Boardrouter from './src/routes/boardRoutes.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/',Instrouter);
app.use('/',Boardrouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("App listening on Port:", PORT);
});

connection();