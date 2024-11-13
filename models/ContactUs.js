const mongoose =require('mongoose');
const contactUsSchema = new mongoose.Schema({
    ContactID: { type: mongoose.Schema.Types.ObjectId, required: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Message: { type: String },
    Timestamp: { type: Date, default: Date.now }
  });
  
  const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs
