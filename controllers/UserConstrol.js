// const express = require('express');
// const { User, Property, Admin } = require('../models'); 
// const router = express.Router();  


// router.post('/users', async (req, res) => {
//   const { Name, Email, Password, PhoneNumber, UserType } = req.body;
  
//   try {
//     const user = new User({
//       UserID: new mongoose.Types.ObjectId(),
//       Name,
//       Email,
//       Password,
//       PhoneNumber,
//       UserType
//     });

//     await user.save();
//     res.status(201).json({ message: 'User created', user });
//   } catch (err) {
//     res.status(400).json({ error: 'Error creating user', details: err });
//   }
// });

// router.post('/properties', async (req, res) => {
//   const { OwnerID, Address, City, State, Price, Type, Description, Bedrooms, Bathrooms, SquareFootage } = req.body;
  
//   try {
//     const property = new Property({
//       PropertyID: new mongoose.Types.ObjectId(),
//       OwnerID: new mongoose.Types.ObjectId(OwnerID),
//       Address,
//       City,
//       State,
//       Price: parseFloat(Price),
//       Type,
//       Description,
//       Bedrooms,
//       Bathrooms,
//       SquareFootage
//     });

//     await property.save();
//     res.status(201).json({ message: 'Property created', property });
//   } catch (err) {
//     res.status(400).json({ error: 'Error creating property', details: err });
//   }
// });

// router.post('/admins', async (req, res) => {
//   const { username, name, email, password, phoneNumber, role } = req.body;
  
//   try {
//     const admin = new Admin({
//       username,
//       name,
//       email,
//       password,
//       phoneNumber,
//       role: 'admin',
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });

//     await admin.save();
//     res.status(201).json({ message: 'Admin created', admin });
//   } catch (err) {
//     res.status(400).json({ error: 'Error creating admin', details: err });
//   }
// });

// module.exports = router; 
