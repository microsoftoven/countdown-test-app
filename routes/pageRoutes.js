// const mongoose = require('mongoose');
// const requireLogin = require('../middleware/requireLogin');

// const Page = mongoose.model('pages');

// module.exports = (app) => {
//     // get multiple pages
//     app.get('/api/pages', async (req, res) => {
//         try {
//             const pages = await Page.find({});

//             res.status(200).json({ pages });
//         } catch (error) {
//             return error;
//         }
//     });

//     // get a single page by ID
//     app.get('/api/pages/:slug', async (req, res) => {
//         try {
//             const page = await Page.find({ slug: req.params.slug });

//             res.status(200).json({ page });
//         } catch (error) {
//             return error;
//         }
//     });
// };
