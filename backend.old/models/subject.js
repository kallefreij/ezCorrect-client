const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    created_at: {type: String, required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);
