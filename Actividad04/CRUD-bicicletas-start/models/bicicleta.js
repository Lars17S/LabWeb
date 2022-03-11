let Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id
    this.color = color 
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function() {
    return `id: ${this.id} | color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici)
}

// Añadir un par de bicis:
let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284076, -99.1355524])
let b2 = new Bicicleta(2, 'blanca', 'bmx', [20.284076, -99.1355524])

Bicicleta.add(b1)
Bicicleta.add(b2)

module.exports = Bicicleta