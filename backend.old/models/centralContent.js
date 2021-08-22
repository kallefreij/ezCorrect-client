const mongoose = require('mongoose');

const centralContentSchema = mongoose.Schema({
    title: {type: String, required: true },
    elements: {type: [], required: true },
    belongsTo: {type: String, required: true},
    created_at: {type: String, required: true}
});

module.exports = mongoose.model('centralContents', centralContentSchema);
