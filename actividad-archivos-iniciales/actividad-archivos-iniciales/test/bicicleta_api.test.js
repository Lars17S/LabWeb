const mongoose = require("mongoose");
const Bicicleta = require("../models/bicicleta");
const request = require("request");
var assert = require("assert");

let base_url = "http://localhost:3000/api/bicicletas/";

describe("Bicicletas API", () => {
  beforeEach(function (done) {
    var mongoDB = "mongodb://localhost:27017/red_bicicletas";
    mongoose.connect(mongoDB, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function () {
      //console.log('Connected to the test database')
      done();
    });
  });

  afterEach(function (done) {
    Bicicleta.deleteMany({}, function (err, success) {
      if (err) console.log(err);
      const db = mongoose.connection;
      db.close();
      done();
    });
  });

  describe("GET BICICLETAS /", () => {
    it("Status 200", (done) => {
      request.get(base_url, function (error, response, body) {
        let res = JSON.parse(body);
        assert.equal(response.statusCode, 200);
        let bicis_num = res.bicicletas.length;
        assert.equal(bicis_num, 0);
        done();
      });
    });
  });

  describe("POST BICICLETA /create", () => {
    it("Status 200", (done) => {
      let headers = { "content-type": "application/json" };
      let aBici =
        '{"code" : 3, "color": "green", "modelo": "bmx", "lat": -99.13, "lon": 19.28}';
      request.post(
        {
          headers: headers,
          url: base_url + "create",
          body: aBici,
        },
        (error, response, body) => {
          assert.equal(response.statusCode, 200);
          let bici = JSON.parse(body).bicicleta;
          assert.equal(bici.color, "green");
          assert.equal(bici.ubicacion[0], -99.13);
          assert.equal(bici.ubicacion[1], 19.28);
          done();
        }
      );
    });
  });
});
