const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  item: String,
  image: String,
  heLikesIt: Boolean
});

const thingModel = mongoose.model('Thing', thingSchema);
module.exports = thingModel;
