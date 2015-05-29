# hearthquiz
A quick hearthstone quiz game written with expressjs.

###Install & Run:
<ol>
  <li>
    clone repo
  </li>
  <li>
    ```cd hearthquiz```<br>
    ```npm install```
  </li>
  <li>
    edit line 9 of routes/api.js from:<br>
    ``` url: 'http://localhost:3000/all-cards.json' ```<br>
    to: <br>
    ``` url: '<your domain>/all-cards.json' ```
  </li>
  <li>
    Get back to the root directory...<br>
    ```cd ..```
  </li>
  <li>
    Run it with:<br>
    ```DEBUG=hearthquiz npm start```
  </li>

## Preview of Mystery Stage
![Alt text](https://github.com/skeltont/hearthquiz/blob/master/public/images/mystery_screenshot.png "Mystery Screenshot")
## Preview of Solved Stage
![Alt text](https://github.com/skeltont/hearthquiz/blob/master/public/images/solved_screenshot.png "Solved Screenshot")
