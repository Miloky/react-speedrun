
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const winston = require('winston');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

router.get('/api', (req, res) => {
  winston.log('info', 'Retrieved data from API');
  res.json('Retrieved data from API');
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  // console.log(`Listening on ${app.get('port')}`);
});
