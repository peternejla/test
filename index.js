import express from "express";

const app = express();
port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ hej: "hej" });
});

app.listen(4000, () => {
  console.log("hej");
});
