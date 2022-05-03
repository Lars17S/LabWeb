const Reserva = require("../models/reserva");

exports.reserva_list = function (req, res) {
  Reserva.find({}, function (err, reservas) {
    if (err) console.log("error:" + err);
    res.render("reservas/index", { reservas: reservas });
  });
};
