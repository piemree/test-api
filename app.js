const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("MY FISRT CLOUD RUN HELLO WORLD APP from litte home");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
