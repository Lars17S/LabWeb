// controllers/PagesController.js

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
    res.render('pages/homepage');
}
  
// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
    res.render('pages/about');
}