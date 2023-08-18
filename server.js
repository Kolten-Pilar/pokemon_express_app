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
  res.render('Home')
})

//pokemon get route
app.get('/pokemon', (req, res) => {
  res.render('Index', {
    pokemon: pokemon
  })
})

//show route
app.get('/pokemon/:id', (req, res) => {
  res.render('Show', {
    pokemon: pokemon[req.params.id]
  })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})