const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js'); //import pokemon data

//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes
// -------------------------------------------------------------------------
// homepage
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})

//pokemon get route
app.get('/pokemon', (req, res) => {
  res.render('Index', {
    pokemon: pokemon
  })
})

//show route
app.get('/pokemon/:id', (req, res) => {
  res.send(`<h1>req.params.id</h1>`)
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})