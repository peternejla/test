import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ hej: "hej hejg" });
});

app.listen(port, () => {
  console.log(`kör på ${port}`);
});
