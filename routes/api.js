var express = require('express');
var request = require('request');
var router = express.Router();
var hc_repo = require('hearthstone-card-repo');


/* GET home page. */
router.post('/get_card', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  var name = req.body.card;
  
  var options = {
	  url: 'https://irythia-hs.p.mashape.com/card?name='+name,
	  headers: {
	    'X-Mashape-Key': '2d9vda6TefmshrunfDI2FjLbsUEOp1uQY9xjsn6c4nR9rUqRJ6',
	    'Accept': 'application/json'
	  }
  };

  // request(options, function (req, res, body) {
  var card;
  request.get(options, function (req, response, body) {
  // request.get(options).end(function(err, response) { 
  		// card = result.body;
  		card = body;
  		//card = JSON.stringify(body);
  		//console.log(JSON.parse(body));
  		// console.log(body);
  		console.log(card);
  		res.json(card);		
  		
  		

  });
  // res.json(card);
  console.log(card)
  // res.json(card)

  // var array = Object.keys(test).map(function(k) { return test[k]});
  // console.log(array);


});

router.post('/get_round', function (req, res, next) {
  var options = {
	  // url: 'https://irythia-hs.p.mashape.com/cards',
	  
	  //PREVIOUSLY WORKING
	  // url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
	  // headers: {
	  //   'X-Mashape-Key': '2d9vda6TefmshrunfDI2FjLbsUEOp1uQY9xjsn6c4nR9rUqRJ6'
	  // }

	  url: 'http://hearthstoneapi.herokuapp.com/api/v1/cards.json'


  };

  var card;
  var cards = [];
  request.get(options, function (req, response, body) {
  		// console.log(body);
  		// res.send(JSON.stringify(body));
  		res.json(JSON.parse(body));

  });
})


router.post('/test', function (req, res, next) {
	var name = req.body.card;
	// var card = hc_repo.(name);
	console.log(card);
	// console.log(hc_repo.());
	res.json(card);

})

module.exports = router;
