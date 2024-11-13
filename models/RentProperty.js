const mongoose =require('mongoose');
const rentPropertySchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  rentalPrice: { type: Number, required: true, min: 1 },
  leaseTerm: { type: String, required: true },
  tenantName: { type: String, required: true },
  tenantEmail: { type: String, required: true, unique: true, lowercase: true },
  tenantPhoneNumber: { type: String, required: true },
  leaseStartDate: { type: Date, required: true },
  leaseEndDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
  
const RentProperty = mongoose.model('RentProperty', rentPropertySchema);

module.exports = RentProperty
