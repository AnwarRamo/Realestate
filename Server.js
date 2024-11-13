const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// const { User, Property } = require('./models');
const citiesRouter = require('./routes/cities');
const propertiesRouter = require('./routes/properties');
const sellPropertiesRouter = require('./routes/sellProperties');
const rentPropertiesRouter = require('./routes/rentProperties');

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI || "mongodb+srv://anwarramo38:KtYuH4Ug56jcjV78@cluster0.z5s2h.mongodb.net/realstate";


mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     console.error('Error retrieving users:', err);
//     res.status(500).json({ error: 'Error retrieving users', details: err.message });
//   }
// });

app.use('/api/cities', citiesRouter);
app.use('/api/properties', propertiesRouter);
app.use('/api/sell', sellPropertiesRouter);
app.use('/api/rent', rentPropertiesRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});