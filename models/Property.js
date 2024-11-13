

const mongoose =require('mongoose');
const propertySchema = new mongoose.Schema({
  OwnerID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Price: { type: Number, required: true },
  Type: { type: String, required: true },
  Description: { type: String },
  Bedrooms: { type: Number },
  Bathrooms: { type: Number },
  SquareFootage: { type: Number },
  imageUrl: { type: String},
  CreatedAt: { type: Date, default: Date.now },
UpdatedAt: { type: Date, default: Date.now },
});

 const Property = mongoose.model('Property', propertySchema);
 module.exports = Property;

