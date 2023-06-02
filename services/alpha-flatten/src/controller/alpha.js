const mongoose = require('mongoose');
const Alpha = require('../model/alpha');
const Flatten = require('../model/flatten');

const addAlpha = (req, res) => {
  const { body } = req;
  const sortedKeys = Object.keys(body).sort();
  const newObj = {};
  for (let key of sortedKeys) {
    newObj[key] = body[key]; 
  }

  const alpha = new Alpha(newObj);
  alpha.save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({msg: `error: ${error}`}));
};

const addFlatten = (req, res) => {
  const { body } = req;
  const str = body.city_list.join(",");
  body.city_list = str;
  const flatt = new Flatten(body);
  flatt.save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({msg: `error: ${error}`}));
}

module.exports = {addAlpha, addFlatten};