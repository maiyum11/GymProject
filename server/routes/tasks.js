let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with task model

let Task = require('../models/tasks');
let taskController = require('../controller/task')

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/* READ Operation */

router.get('/',taskController.displaygym);

/* ADD Operation */
router.get('/add',requireAuth, taskController.displayAddPage);
/* Post route for processing*/
router.post('/add',requireAuth,taskController.processAddPage);
/* EDIT Operation */
router.get('/edit/:id',requireAuth,taskController.displayEditPage);
/*Post route for displaying*/
router.post('/edit/:id',requireAuth,taskController.processEditPage);
/* DELETE Operation */
router.get('/delete/:id',requireAuth,taskController.performDelete);

module.exports = router;