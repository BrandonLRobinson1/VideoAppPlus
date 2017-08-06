let express = require('express');
let PORT = 8080;

let app = express();

// app.all('/')
//   .then( (req, res) => {
//     res.json({'test': 'test'})
//   } );

app.all('/', (req, res) => {
  res.json({'test': 'test'});
});


app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log('up up and away ', PORT)
} );