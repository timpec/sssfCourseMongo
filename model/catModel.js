const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name:  String,
  age: Number,
  gender: String,
  color: String,
  weight: Number,
  owner: { type: mongoose.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cat', catSchema);