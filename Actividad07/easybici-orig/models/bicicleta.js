var mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bicicletaSchema = new Schema({
  code: Number,
  color: String,
  modelo: String,
  ubicacion: {
    type: [Number],
    index: { type: "2dsphere", sparse: true },
  },
});

bicicletaSchema.method.toString = function () {
  return `code: ${this.code}, color: ${this.color}`;
};

bicicletaSchema.statics.allBicis = function (cb) {
  return this.find({}, cb);
};

bicicletaSchema.statics.createInstance = function (
  code,
  color,
  modelo,
  ubicacion
) {
  return new this({
    color: code,
    color: color,
    modelo: modelo,
    ubicacion: ubicacion,
  });
};

module.exports = mongoose.model("Bicicletas", bicicletaSchema);
