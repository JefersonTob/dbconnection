var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BT-Inspection Cloud' });
});

/*simple rest api*/
/*router.get('/livecheck', function(req, res){
   var responseObject = { message: 'ok' };
   res.send(responseObject);    
});*/

module.exports = router;