const mongoose =require('mongoose');

const listingSchema = new mongoose.Schema({
    ListingID: { type: mongoose.Schema.Types.ObjectId, required: true },
    PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    Status: { type: String },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now }
  });
const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing
