const express = require("express");

const app = express();

const port = 3030;

const bd = require("./infra/sqlite3-db");

const assessmentsController = require("./Controller/Avalicao-controller");

app.use(express.json());

assessmentsController(app, bd);

app.listen(port, () => {
  console.log(`Aplicação rodando na ${port}`);
});
