const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema({
    id: String,
    title: String,
    slug: String,
    content: String,
    private: Boolean,
});

mongoose.model('pages', pageSchema);
