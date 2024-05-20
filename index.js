const express = require("express");
const sequelize = require('./database');
const Joke = require("./Joke");

sequelize.sync().then(() => console.log('Bdd prête'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/blagues', async(req, res) => {
  await Joke.create(req.body);
  res.send('La blague est ajoutée');
  })

app.get('/blagues', async(req, res) => {
  const jokes = await Joke.findAll();
  res.send(jokes);
})

app.get('/blagues/:id', async(req, res) => {
  const requestedId = req.params.id;
  const joke = await Joke.findOne({where: {id: requestedId}});
  res.send(joke);
})

app.get('/random', async(req, res) => {
  const jokes = await Joke.findAll();
  const random = (Math.floor(Math.random() * jokes.length)-1)+1;
  res.send(jokes[random]);
})

app.listen(4000, () => {
  console.log("App is running");
});


