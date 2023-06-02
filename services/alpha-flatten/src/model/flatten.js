const mongoose = require('mongoose');

const flattenSchema = new mongoose.Schema({
  fruit: {
    type: String,
    required: true
  },
  animal: {
    type: String,
    required: true
  },
  city_list: {
    type: String,
    required: true
  }
});

const flattenModel = mongoose.model('DataF', flattenSchema);
module.exports = flattenModel;