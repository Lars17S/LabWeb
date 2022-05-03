const mongoose = require("mongoose");
const Reserva = require("./reserva");
let Schema = mongoose.Schema;

const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

let validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "El email es obligatorio"],
    lowercase: true,
    // Hacer que el email sea unico
    unique: true,
    validate: [validateEmail, "Por favor, ingrese un email válido"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Por favor, ingrese un email válido",
    ],
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
  verificado: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.pre("save", (next) => {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }
  next();
});

usuarioSchema.methods.reservar = function (biciId, desde, hasta, cb) {
  let reserva = new Reserva({
    usuario: this._id,
    bicicleta: biciId,
    desde: desde,
    hasta: hasta,
  });
  //console.log(reserva)
  reserva.save(cb);
};

usuarioSchema.methods.validPassword = (password) => {
  return bcrypt.compare(password, this.password);
};

usuarioSchema.plugin(uniqueValidator, {
  message: "El {PATH} ya existe con otro usuario.",
});

module.exports = mongoose.model("Usuario", usuarioSchema);
