const express = require("express");
const sequelize = require('./database');
const Joke = require("./Joke");

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

  app.use(express.json());

app.post('/jokes', async(req, res) => {
  await Joke.create(req.body);
  res.send('Joke is inserted');
  })

app.get('/jokes', async(req, res) => {
  const jokes = await Joke.findAll();
  res.send(jokes);
})

app.listen(4000, () => {
  console.log("App is running");
});

