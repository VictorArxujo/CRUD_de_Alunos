const express = require("express");
const mongoose = require("mongoose");
const app = express();
const alunoRouter = require("./routes/alunoRoutes"); // Recebendo o export do alunoroutes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/aluno", alunoRouter);

DB_PASS = "6a9uNW3T0eKDuDyN";

mongoose
  .connect(`mongodb+srv://victor:${DB_PASS}@cluster0.homdfjz.mongodb.net/`)
  .then(() => {
    console.log("conectamos ao banco");
    app.listen(4000);
  })
  .catch((err) => {
    console.log("entrei aqui");
    console.log("Deu erro: " + err);
  });
