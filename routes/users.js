var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  var userList = ['Mackenzie', 'Matt', 'Nero'];

  //load users.ejs and pass-in the userList array
  res.render('users', {
    title : 'User List',      //the title name
    users : userList});       //call the users
});


module.exports = router;
