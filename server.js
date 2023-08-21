const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js'); //import pokemon data

//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Middleware - function to excecute for all routes
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})
//this allows the body of the POST request - REQUIRED FOR POST REQUEST
app.use(express.urlencoded({extended: false}));

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

//New pokemon
app.get('/new', (req, res) => {
  res.render('New');
})

//Create = POST
app.post('/pokemon', (req, res) => {
  console.log(req.body);
  const newPokemon = { //creates new pokemon data
    name: req.body.name,
    img: req.body.img,
  }
  // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
  //   req.body.readyToEat = true; // do some data correction
  // } else { //if not checked, req.body.readyToEat is undefined
  //   req.body.readyToEat = false;
  // }
  pokemon.push(newPokemon);
  res.redirect('/pokemon');
  res.send('data received');
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