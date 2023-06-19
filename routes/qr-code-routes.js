const express = require("express");
const router = express.Router();
const QRCode = require("qrcode");

router.get("/generate-qr", (req, res) => {
  const data = req.query.data;

  if (data == undefined) {
    res.status(400).send("Bad Request: No data in the query string");
    return;
  }

  QRCode.toDataURL(data, (err, url) => {
    if (err) {
      res.status(500).send("Error occurred during QR Code generation");
    } else {
      res.render("qr", { qr: url });
    }
  });
});

module.exports = router;
