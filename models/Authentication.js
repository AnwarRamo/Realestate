const mongoose = require('mongoose');


const authenticationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  authenticationResponse: { type: String, required: true },
  anotherAuthenticationResponse: { type: String },
  additionalAuthenticationResponse: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Authentication = mongoose.model('Authentication', authenticationSchema);

module.exports = Authentication ;
