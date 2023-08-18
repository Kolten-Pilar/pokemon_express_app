const express = require('express');
const app = express();
const port = 3000;

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


app.listen(port, () => {
  console.log(`listening at port ${port}`);
})