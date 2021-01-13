const mongoose = require('mongoose');
const { Schema } = mongoose;

const deadlineSchema = new Schema({
    userID: String,
    timestamp: {
        type: Date,
        default: Date.now,
    },
    title: String,
});

mongoose.model('deadlines', deadlineSchema);
