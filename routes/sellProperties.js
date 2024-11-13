const express = require('express');
const router = express.Router();
const SellProperty = require('../models/SaleProperty');

// Get properties for sale
router.get('/', async (req, res) => {
  try {
    const properties = await SellProperty.find();
    res.json({ "For Sale": properties });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific property for sale by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await SellProperty.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;