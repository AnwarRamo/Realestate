// const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //   UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
// //   Name: { type: String, required: true },
// //   Email: { type: String, required: true, unique: true },
// //   Password: { type: String, required: true },
// //   PhoneNumber: { type: String },
// //   UserType: { type: String },
// //   CreatedAt: { type: Date, default: Date.now },
// //   UpdatedAt: { type: Date, default: Date.now }
// // });

// // const propertySchema = new mongoose.Schema({
// //     PropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
// //     OwnerID: { type: mongoose.Schema.Types.ObjectId, required: true },
// //   Address: { type: String, required: true },
// //   City: { type: String, required: true },
// //   State: { type: String, required: true },
// //   Price: { type: Number, required: true },
// //   Type: { type: String },
// //   Description: { type: String },
// //   Bedrooms: { type: Number },
// //   Bathrooms: { type: Number },
// //   SquareFootage: { type: Number },
// //   CreatedAt: { type: Date, default: Date.now },
// //   UpdatedAt: { type: Date, default: Date.now },
// //   imageUrl: { type: String, required: true },

// // });

// const salePropertySchema = new mongoose.Schema({
//   SalePropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   AskingPrice: { type: Number, required: true }
// });

// const rentPropertySchema = new mongoose.Schema({
//   RentPropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   RentalPrice: { type: Number, required: true },
//   LeaseTerm: { type: String }
// });

// const buyPropertySchema = new mongoose.Schema({
//   BuyPropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   PurchasePrice: { type: Number, required: true }
// });

// const listingSchema = new mongoose.Schema({
//   ListingID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   Status: { type: String },
//   CreatedAt: { type: Date, default: Date.now },
//   UpdatedAt: { type: Date, default: Date.now }
// });

// const chatSchema = new mongoose.Schema({
//   ChatID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   Message: { type: String },
//   Timestamp: { type: Date, default: Date.now }
// });

// const reviewSchema = new mongoose.Schema({
//   ReviewID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   Rating: { type: Number },
//   Comment: { type: String },
//   CreatedAt: { type: Date, default: Date.now }
// });

// const contactUsSchema = new mongoose.Schema({
//   ContactID: { type: mongoose.Schema.Types.ObjectId, required: true },
//   UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   Message: { type: String },
//   Timestamp: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);
// const Property = mongoose.model('Property', propertySchema);
// const SaleProperty = mongoose.model('SaleProperty', salePropertySchema);
// const RentProperty = mongoose.model('RentProperty', rentPropertySchema);
// const BuyProperty = mongoose.model('BuyProperty', buyPropertySchema);
// const Listing = mongoose.model('Listing', listingSchema);
// const Chat = mongoose.model('Chat', chatSchema);
// const Review = mongoose.model('Review', reviewSchema);
// const ContactUs = mongoose.model('ContactUs', contactUsSchema);

// module.exports = {
//   User,
//   Property,
//   SaleProperty,
//   RentProperty,
//   BuyProperty,
//   Listing,
//   Chat,
//   Review,
//   ContactUs
// };
const User = require('./User');        
const Property = require('./Property');
const Chat = require('./Chat');
const Review = require('./Review');
const Listing = require('./Listing');
const ContactUs = require('./ContactUs');
const BuyProperty = require('./BuyProperty');
const Admin = require('./admin');
const SaleProperty = require('./SaleProperty');
const Authentication = require('./Authentication');
const RentProperty = require('./RentProperty');

module.exports = 
{
  User,
  Property,
  Chat,
  Review,
  Listing,
  ContactUs,
  BuyProperty,
  Admin,
  SaleProperty,
  Authentication 
  ,RentProperty
}
;
