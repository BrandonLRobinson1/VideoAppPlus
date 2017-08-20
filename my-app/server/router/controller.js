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

exports.verifyUser = async (req, res) => {
  let email = req.body.email;
  let pw = req.body.pw;

  let findTheUser = await User.findOne({email: email})

  if (findTheUser) {
    // throw new Error('whoops');
    bcrypt.compare(pw, findTheUser.password)
      .then( response => {
        if ( response ) {
          req.session.regenerate( (err) => {
          console.log('password verified...session created');
        })
          res.status(201).send(response);
        } else {
          console.log('password is incorrect');
          res.status(400).send('password is incorrect');
        }
      } )
  } else {
    console.log('user not found');
    res.status(400).send('user not found');
  }

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

// exports.error = function(req, res){
//   res.json({"404": "error"})
// }

exports.error = (req, res, next) => {
  const err = new Error('not found');
  err.status = 404;
  next(err);
}