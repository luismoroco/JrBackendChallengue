const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const root = require('./api/root');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', root);

mongoose.connect(
  "mongodb://mongodb:27017/db", 
  {useNewUrlParser: true,
  useUnifiedTopology: true}
).then(() => {
  console.log('CONNECTED');
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch((error) => {
  console.error('ERROR', error);
});