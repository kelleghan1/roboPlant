var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET 'numbers' page */
router.get('/numbers', function(req, res) {
    res.render('numbers', { title: 'NUMBERS' });
});

/* GET 'test1' page */
//Should not use 'usercollection' --> should make new collection after inital dev

router.get('/test1', function(req, res) {
    var db = req.db;
    var array = [1,2,3,4,5];
    var testing = "testing";
    var collection = db.get('usercollection');
    var humidityArr;
    var tempArr;
    console.log("======================", collection);

    collection.find({}, {}, function(e,results){
        var stringResults = JSON.stringify(results);
    	
        res.render('index', {
             'test1' : JSON.stringify(results),
	     'title' : 'RoboPlant!'
        });
    });


});

//incompleate!!!!


module.exports = router;
