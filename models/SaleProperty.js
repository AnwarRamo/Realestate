const mongoose =require('mongoose');
const salePropertySchema = new mongoose.Schema({
    SalePropertyID: { type: mongoose.Schema.Types.ObjectId, required: true },
    PropertyID: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    AskingPrice: { type: Number, required: true }
  });
  const SaleProperty = mongoose.model('SaleProperty', salePropertySchema);

module.exports = SaleProperty
