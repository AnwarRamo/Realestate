const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
  const { type, price } = req.body;
  const query = {};
  if (type !== 'all') {
    query.type = type;
  }
  if (price !== 'any') {
    query.price = { $lte: price };
  }
  try {
    const properties = await Property.find(query);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProperty = async (req, res) => {
  const property = new Property(req.body);
  try {
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!property) {
      return res.status(404).json({ message: 'Cannot find property' });
    }
    res.json(property);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Cannot find property' });
    }
    res.json({ message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};