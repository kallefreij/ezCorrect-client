const mongoose = require('mongoose');

const knowReqSchema = mongoose.Schema({
    title: {type: String, required: true },
    description: {type: String, required: true },
    belongsTo: {type: String, required: true },
    created_at: {type: String, required: true}
});

module.exports = mongoose.model('Knowledgerequirement', knowReqSchema);
