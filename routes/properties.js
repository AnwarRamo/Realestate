const express = require('express');
const router = express.Router();
const propertiesController = require('../controllers/propertyController');
const { Property } = require('../models');

async function getProperty(req, res, next) {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Cannot find property' });
    }
    res.property = property;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

router.post('/', propertiesController.getProperties);
router.post('/create', propertiesController.createProperty);
router.put('/:id', propertiesController.updateProperty);
router.delete('/:id', propertiesController.deleteProperty);

router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getProperty, (req, res) => {
  res.json(res.property);
});

module.exports = router;