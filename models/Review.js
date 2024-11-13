const mongoose =require('mongoose');
const reviewSchema = new mongoose.Schema({
    ReviewID: { type: mongoose.Schema.Types.ObjectId, required: true },
    PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Rating: { type: Number },
    Comment: { type: String },
    CreatedAt: { type: Date, default: Date.now }
  });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review
