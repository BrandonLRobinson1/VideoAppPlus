let videoAppPlusRouter = require('express').Router();
let controller = require('./controller.js');

videoAppPlusRouter.post('/signup', controller.createUser);

videoAppPlusRouter.post('/login', controller.verifyUser);

videoAppPlusRouter.post('/update', controller.updateUser);

videoAppPlusRouter.all('/', controller.error)


module.exports = videoAppPlusRouter;