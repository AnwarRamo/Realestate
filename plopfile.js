// module.exports = function (plop) {
//     plop.setGenerator('image-upload', {
//         description: 'Create image upload and display module',
//         prompts: [
//             {
//                 type: 'input',
//                 name: 'filename',
//                 message: 'Enter the filename of the image in MongoDB:'
//             }
//         ],
//         actions: [
//             {
//                 type: 'add',
//                 path: 'src/routes/imageRoutes.js',
//                 templateFile: 'templates/imageRoutes.js.hbs'
//             },
//             {
//                 type: 'add',
//                 path: 'src/components/ImageDisplay.js',
//                 templateFile: 'templates/ImageDisplay.js.hbs',
//                 data: {
//                     filename: '{{filename}}'
//                 }
//             }
//         ]
//     });
// };