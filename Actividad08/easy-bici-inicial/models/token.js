const mongoose = require("mongoose");
const Reserva = require("./reserva");
let Schema = mongoose.Schema;

let tokenSchema = new Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Usuario",
  },
  strToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
    expires: 43200,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
