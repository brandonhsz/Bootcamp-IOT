const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const temperature = req.query.temp;

  if (temperature < 21) {
    res.send(`
      <meta http-equiv="refresh" content="3">
      <h1>Status -> On ${temperature}</h1>
    `);
  } else {
    res.send(`
      <meta http-equiv="refresh" content="3">
      <h1>off -> Off ${temperature}</h1>
    `);
  }
});

app.listen(process.env.PORT || 3000, () => console.log("Server on"));
