const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring

const userSchema = new Schema({
    googleID: String,
});

mongoose.model('users', userSchema);
