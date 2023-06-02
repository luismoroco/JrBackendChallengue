const mongoose = require('mongoose');

const alphaSchema = new mongoose.Schema({
  animal: {
    type: String,
    required: true
  },
  city_list: {
    type: [String],
    required: true
  },
  fruit: {
    type: String,
    required: true
  }
});

const alphaModel = mongoose.model('Data', alphaSchema);
module.exports = alphaModel;