const express = require("express");
const app = express();
const port = 8000;
const path = __dirname + "/views/";

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
