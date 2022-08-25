const express = require("express");

const PORT = process.env.PORT || 3000

const app = express();

const schedule = require('./schedule.js')
schedule.init()

app.get("/", (req, res) => {
  res.status(200).send("Tjena");
});

app.post('/', (req, res) => {
  res.send('Det här är en request')
})

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});
