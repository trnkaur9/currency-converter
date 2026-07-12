const express = require("express");
const fs = require("node:fs");

const { validate } = require("./modules/tk_validations");
const { calculate } = require("./modules/tk_calc_logic");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let data = fs.readFileSync(__dirname + "/index.html", "utf-8");

  res.status(200).send(data);
});

app.post("/convert", (req, res) => {
  let message = validate(
    req.body.amount,
    req.body.haveCurrency,
    req.body.wantCurrency,
  );

  if (message === true) {
    let result = calculate(
      Number(req.body.amount),
      req.body.haveCurrency,
      req.body.wantCurrency,
    );

    res
      .status(200)
      .send(
        JSON.stringify({
          message: `${result.toFixed(2)} ${req.body.wantCurrency.toUpperCase()}`,
        }),
      );
  } else {
    res.status(400).send(JSON.stringify({ error: message }));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
