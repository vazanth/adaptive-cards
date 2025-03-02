const express = require("express");
const cors = require("cors");
const simpleText = require("./json/simpleText.json");
const accordion = require("./json/accordion.json");
const richContent = require("./json/richContent.json");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.post("/adaptive-card", (req, res) => {

  console.log(req.body);

  res.json(accordion); // adjust the response here as needed with json above
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
