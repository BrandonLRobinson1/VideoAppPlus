let bcrypt        = require('bcrypt');
let User          = require('../db/schema');

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.createUser = async (req, res) => {
  let email = req.body.email;
  // let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.pw, 10); // no need to use salt can jst replace it with ten

  let newUser = new User( {
    email: email,
    password: hash
  } );



  let findTheUser = await User.findOne({ email });
  console.log(findTheUser, ' findTheUser')
  if (!findTheUser) {
    await newUser.save();
    res.status(201).send(newUser);
  } else {
    res.status(400).send('this user/email has already been created');
  }


}

exports.verifyUser = function(req, res){
  console.log(req.body, ' req.body on verifyuser')
  let email = req.body.email;
  let password = req.body.pw;

  //insert session or passport
  console.log(email, password, ' email and pw');

  let findTheUser = User.findOne({email: email})
    .then( (user) => {
      throw new Error('whoops'); // <------------------------------------------------------ Tests the catch on line 69;
      console.log('user found, verifying password...');
      bcrypt.compare(password, user.password, function(err, response) {
        //response is true if and only if passwords match
        if (response) {
          req.session.regenerate(function(err) {
            // will have a new session here
            console.log('password verified...session created');
            //console.log(req.session, ' delete me')
          })
          res.status(201).send(user);
        } else {
          console.log('username or password is incorrect');
          res.status(400).send('username or password is incorrect');
        }
    });
    })
    .catch( (err) => {
       console.log('user not found - find the user login route')
       if (err) handleError(err);
    } );

};


exports.updateUser = function(req, res){

  let userEmail = req.body.userEmail;
  let infoObj = req.body.stateData;
  let { name, address, address2, relocation, age, phone, resume, coverLetter, linkedIn, gitHub, authorized, disability } = infoObj;

  console.log(req.body, ' update user req body');
//   User.findOneAndUpdate({email: userEmail}, {
//     {"name": name,
//       "address": address,
//       "address2": address2,
//       "relocation": relocation,
//       "age": age,
//       "phone": phone,
//       "resume": resume,
//       "coverLetter": coverLetter,
//       "linkedIn": linkedIn,
//       "gitHub": gitHub,
//       "authorized": authorized,
//       "disability": disability
//    },
//   {'new': true},
//   function(err, data){
//     if(err) return err;
//     if ( data ){
//       console.log('new user data saved -- name, address, linkedIn etc')
//       res.status(201).send(data);
//     } else {
//       console.log('your form data might be trash');
//       res.status(400).send('something is wrong with your data R2D2');
//     }
//   }  
// )

  let findUserAndUpdate = User.findOneAndUpdate({email: userEmail}, {
    '$set':
    {"name": name,
      "address": address,
      "address2": address2,
      "relocation": relocation,
      "age": age,
      "phone": phone,
      "resume": resume,
      "coverLetter": coverLetter,
      "linkedIn": linkedIn,
      "gitHub": gitHub,
      "authorized": authorized,
      "disability": disability
   } },
  {'new': true});

  findUserAndUpdate
   .then( (data) => {
      console.log('new user data saved -- name, address, linkedIn etc')
      throw new Error('whoops'); // <------------------------------------------------------ Tests the catch on line 69; 
      res.status(201).send(data);
   } )
   .catch( (err) => {
     console.log('your form data might be trash');
     if (err) throw new error;
     res.status(400).send('something is wrong with your data R2D2');
   } ) 

};

exports.error = function(req, res){
  res.json({"404": "error"})
}