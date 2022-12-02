let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);
// GET for login page
router.get('/login',indexController.displayLoginPage);
// POST for login page
router.post('/login',indexController.processLoginPage);
// GET for register page
router.get('/register',indexController.displayRegisterPage);
// POST for register page
router.post('/register',indexController.processRegisterPage);
// GET for logout page
router.get('/logout',indexController.performLogout);
module.exports = router;