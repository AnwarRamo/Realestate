
const mongoose =require('mongoose');



const buyPropertySchema = new mongoose.Schema({
    BuyPropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
    PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    PurchasePrice: { type: Number, required: true }
  });



const BuyProperty = mongoose.model('BuyProperty', buyPropertySchema);
module.exports = BuyProperty
