const express = require("express");

const app = express();
const router = express.Router();

const PATH = __dirname + "/views/";
const PORT = 8000;

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(PATH + "index.html");
});

app.use(express.static(PATH));
app.use("/", router);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
