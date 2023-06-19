const express = require("express");
const qrcode = require("qrcode");
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
const app = express();

const qrRoute = require("./routes/qr-code-routes");

app.use(expressLayouts);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", qrRoute);
app.use(express.static("public"));

app.use("/", qrRoute);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
