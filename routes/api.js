var express = require('express');
var request = require('request');
var router = express.Router();

// load a new round
router.get('/get_round', function (req, res, next) {
  var options = {
    // change depending on where the json file is.
    url: 'http://localhost:3000/all-cards.json'
  };
  request.get(options, function (req, response, body) {
      var cards = JSON.parse(body).cards;
      var answers = [];
      var random = 0;
      var correct = 0;
      var hint1 = "";
      var hint2 = "";

      // pick four answers out of the number of items returned
      // we don't want heroes or weird stuff.
      while (answers.length < 4) {
        random = Math.round(Math.random() * cards.length);
        if ((cards[random].category === 'hero') || (cards[random].set === 'missions') || (cards[random].category === 'ability')) {
          continue;
        } else {
          answers.push(random);  
        }
      }

      // select one of the four to be the correct answer.
      correct = answers[Math.round(Math.random() * 3)];

      // generate a hint for our player.
      hint1 = "<b>Class:</b><br/>"+cards[correct].hero;
      if((cards[correct].category === 'minion') || (cards[correct].category === 'weapon') || (cards[correct].category === 'spell')) {
        if(cards[correct].description !== "") {
          hint2 = "<b>Description:</b><br/>"+cards[correct].description;
          console.log('gucci');
        } else {
          hint2 = "<b>Mana Cost:</b><br/>"+cards[correct].mana+" crystals.";
        }
      }

      // format our response.
      var data = {
        cardHint1 : hint1,
        cardHint2 : hint2,
        correct : cards[correct].id,
        cards : [
          {
            id: cards[answers[0]].id,
            name: cards[answers[0]].name,
          },
          {
            id: cards[answers[1]].id,
            name: cards[answers[1]].name,
          },
          {
            id: cards[answers[2]].id,
            name: cards[answers[2]].name,
          },
          {
            id: cards[answers[3]].id,
            name: cards[answers[3]].name,
          },
        ],
      }

      console.log(data);


      res.send(data);
  });
});


module.exports = router;
