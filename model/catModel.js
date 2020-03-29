const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name:  String,
  age: {
    type: Number,
    min: [0, 'Agen cant be negative']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  color: String,
  weight: Number,
  //owner: { type: mongoose.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cat', catSchema);
