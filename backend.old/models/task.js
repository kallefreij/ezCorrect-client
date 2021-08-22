const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {type: String, required: true },
    subjects: {type: [], required: true },
    knowledgerequirements: {type: [], required: true },
    milestones: {type: [], required: true },
    questions: {type: [], required: true},
    dateStamp: {type: String, required: true},
    schoolClasses: {type: [], required: true}
});

module.exports = mongoose.model('Task', taskSchema);