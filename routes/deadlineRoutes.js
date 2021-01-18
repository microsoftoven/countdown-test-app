const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Deadline = mongoose.model('deadlines');

module.exports = (app) => {
    // get multiple deadlines
    app.get('/api/deadlines', requireLogin, async (req, res) => {
        try {
            const deadlines = await Deadline.find({
                userID: req.user.id,
            })
                .where('timestamp')
                .gt(new Date().toISOString())
                .sort({ timestamp: 'ascending' });

            res.status(200).json({ deadlines });
        } catch (error) {
            return error;
        }
    });

    // get a single deadline by ID
    app.get('/api/deadlines/:deadlineID', requireLogin, async (req, res) => {
        try {
            const deadline = await Deadline.findById(req.params.deadlineID);

            res.status(200).json({ deadline });
        } catch (error) {
            return error;
        }
    });

    // add a single deadline
    app.post('/api/deadlines/', requireLogin, async (req, res) => {
        try {
            const deadline = await Deadline.create(req.body);

            res.status(201).json({ deadline });
        } catch (error) {
            return error;
        }
    });

    // update a single deadline by ID
    app.put('/api/deadlines/:deadlineID', requireLogin, async (req, res) => {
        try {
            const deadline = await Deadline.findByIdAndUpdate(
                req.params.deadlineID,
                req.body,
                { new: true }
            );

            res.status(201).json({ dealine });
        } catch (error) {
            return error;
        }
    });

    // delete a single data: deadline, message: 'Deadline updated by ID
    app.delete('/api/deadlines/:deadlineID', requireLogin, async (req, res) => {
        try {
            const deadline = await Deadline.findByIdAndRemove(
                req.params.deadlineID
            );

            res.status(204).json({});
        } catch (error) {
            return error;
        }
    });
};
