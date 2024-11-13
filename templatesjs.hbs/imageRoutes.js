// const express = require('express');
// const router = express.Router();
// const { GridFSBucket } = require('mongodb');
// const mongoose = require('mongoose');

// const gfs = new GridFSBucket(mongoose.connection.db);

// router.get('/image/:id', (req, res) => {
//     const imageId = mongoose.Types.ObjectId(req.params.id);

//     gfs.find({ _id: imageId }).toArray((err, files) => {
//         if (!files || files.length === 0) {
//             return res.status(404).send('No file exists');
//         }

   
//         const readstream = gfs.openDownloadStream(imageId);
//         readstream.pipe(res);
//     });
// });

// module.exports = router;