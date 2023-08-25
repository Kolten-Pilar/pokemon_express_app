const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const mongoose = require('mongoose');
const pokemon = require('./models/pokemon.js'); //import pokemon data

pokemon.once('open', () => {
  console.log('connected to pokemon mongodb');
});

//setup mongoose connection
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//connect to mongo
mongoose.connect(mongoURI, {
  //get rid of error messages
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//error success messages about connection
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

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
app.get('/pokemon', async (req, res) => {
  const foundPokemon = await pokemon.find({})
  res.render('Index', {
    pokemon: foundPokemon
  })
})

//New pokemon
app.get('/new', (req, res) => {
  res.render('New');
})

//Create = POST
app.post('/pokemon', async (req, res) => {
  console.log('This is the created Pokemon', req.body);
  const newPokemon = await pokemon.create(req.body);
  //{ 
  //creates new pokemon data
  //   name: req.body.name,
  //   img: req.body.img,
 //  }
 // pokemon.push(newPokemon);
  console.log(newPokemon);
  res.redirect('/pokemon');
  //res.send('data received');
})

//show route
app.get('/pokemon/:id', async (req, res) => {
  // res.render('Show', {
  //   pokemon: pokemon[req.params.id]
  // })
  const onePokemon = await pokemon.findById(req.params.id);
  res.render('Show', {
    pokemon: onePokemon
  })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})