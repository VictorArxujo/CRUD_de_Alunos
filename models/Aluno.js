const mongoose = require("mongoose");
const moment = require("moment");

const AlunoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  ra: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  createdAt: String,
  updatedAt: String,
});

// criando uma middleware que é executado antes de um documento ser salvo
AlunoSchema.pre("save", function (next) {
  const now = moment().format("DD/MM/YYYY HH:mm:ss");
  this.updatedAt = now;
  // Se o campo 'createdAt' não existir (ou seja, é um documento novo), define a data de criação
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next(); // Continua com a operação de salvar
});

AlunoSchema.pre("findOneAndUpdate", function (next) {
  const now = moment().format("DD/MM/YYYY HH:mm:ss");
  this.set({ updatedAt: now });
  next();
});

module.exports = mongoose.model("Aluno", AlunoSchema);
