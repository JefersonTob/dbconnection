var express = require('express');
var router = express.Router();
var pool = require('./mysql_database');

router.get('/', function(req, res, next) {    
 pool.getConnection(function(err, connection){
  if(err) {
     var responseObject = { message: 'Error connecting to Inspection database ...' };
     res.send(responseObject);  
  } else {
    var responseObject = { message: 'Inspection database is working ...' };
    res.send(responseObject);      
  }
  connection.release();      
  });     
});

module.exports = router;