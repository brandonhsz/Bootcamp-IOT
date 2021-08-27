const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const temperature = req.query.temp;

  if (temperature < 21) {
    res.send(`Status -> On ${temperature}`);
  } else {
    res.send(`off -> Off ${temperature}`);
  }
});

app.listen(8080);
