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

router.get('/sensor_post', function(req, res) {
    console.log("********************PREPROMISE");
    var db = req.db;
    var collection = db.get('usercollection');
    collection.insert({
    "sensorid": 3,
    "temp": Math.floor(Math.random()*120),
    "humidity": Math.floor(Math.random()*120),
    "test": true
    }).then(function(){
	console.log("PROMISE");
        res.redirect('/test1');
    });

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

    collection.find({}, {}, function(e,results){
        var stringResults = JSON.stringify(results);
    	console.log("****************************", stringResults);
	console.log("----------------------------", e);
        res.render('index', {
             'test1' : stringResults,
	     'title' : 'RoboPlant!'
        });
    });


});

//incompleate!!!!


module.exports = router;
