const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = [
  {
    id: "a",
    title: "苹果",
  },
  {
    id: "b",
    title: "菠萝",
  },
];

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;

  res.json(products.find((p) => p.id === id));
});

app.listen(9000, function () {
  console.log("CORS-enabled web server listening on port 9000");
});
