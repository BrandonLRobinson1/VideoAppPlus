let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videoappplus');
mongoose.Promise = global.Promise; // Mongoose now has access to ES6 promises

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');
});

module.exports = db;

// ugrade to the udated mongo connection
// mongoose.connect('mongodb://localhost/videoAppPlus', {
//   useMongoClient: true,
//   /* other options */
// });

// mongoose.Promise = global.Promise; // Mongoose now has access to ES6 promises

// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
