
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD Project is Working 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

