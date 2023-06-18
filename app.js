const express = require("express");
const qrcode = require("qrcode");
const PORT = 3000;
const app = express();

const qrRoute = require("./routes/qr-code-routes");
app.use("/", qrRoute);

app.get("/", (req, res) => {
  res.send("From the homepage");
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
