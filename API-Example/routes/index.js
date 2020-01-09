const numHelper = require("../helpers/num");
const dateHelper = require("../helpers/date");
const apiHelper = require("../helpers/api");
const qrHelper = require("../helpers/qr");
// App
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API Example para Lagash University esta online.");
});
router.get("/transformarNumero/:numero", (req, res) => {
  const { numero } = req.params;
  const result = numHelper.numWords(numero);
  if (!result) res.send(401, "Tu número ingresado no es válido!");
  else res.send(200, result);
});

router.get("/getAge/:fecha", (req, res) => {
  const edad = dateHelper.obtenerEdad(req.params.fecha);
  res.send(200, `Tu edad es ${edad}`);
});

router.get("/getUf", async function(req, res) {
  const result = await apiHelper.getUf();
  res.send(200, result);
});

router.get("/getQr", (req, res) => {
  res.send(200, qrHelper.qrGenerate("http://google.com"));
});
module.exports = router;
