const express = require('express');
const router = express.Router();
const RentProperty = require('../models/RentProperty');

router.get('/', async (req, res) => {
  try {
    const properties = await RentProperty.find();
    res.json({ "For Rent": properties });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const property = await RentProperty.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;