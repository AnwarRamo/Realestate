const mongoose =require('mongoose');
const chatSchema = new mongoose.Schema({
    ChatID: { type: mongoose.Schema.Types.ObjectId, required: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    Message: { type: String },
    Timestamp: { type: Date, default: Date.now }
  });
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat
