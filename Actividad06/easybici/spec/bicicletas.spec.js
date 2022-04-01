const Bicicleta = require("../models/bicicleta");

beforeEach(() => {
  Bicicleta.allBicis = [];
});

describe("Bicicleta.allBicis", () => {
  it("comienza vacía", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
  });
});

describe("Add a bike", () => {
  it("Should add a bike", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
    let b = new Bicicleta(
      3,
      "Rojo",
      "Benotto",
      [19.28699116801744, -99.13645312899661]
    );
    Bicicleta.add(b);
    expect(Bicicleta.allBicis.length).toBe(1);
  });
});

describe("Find a bike", () => {
  it("should find a bike", () => {
    let b = new Bicicleta(
      3,
      "Rojo",
      "Benotto",
      [19.28699116801744, -99.13645312899661]
    );
    Bicicleta.add(b);
    let c = Bicicleta.findById(3);
    expect(c.modelo).toBe("Benotto");
  });
});

describe("Bicicleta.removeId", () => {
  it("Remove bici", () => {
    let bici = new Bicicleta(
      3,
      "rojo",
      "bmx",
      [19.28699116801744, -99.13645312899661]
    );
    Bicicleta.add(bici);
    expect(Bicicleta.allBicis.length).toBe(1);
    Bicicleta.removeById(3);
    expect(Bicicleta.allBicis.length).toBe(0);
  });
});
