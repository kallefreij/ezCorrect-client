const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    title: {type: String, required: true },
    description: {type: String, required: true},
    subjects: {type: [], required: true},
    categories: {type: [], required: true},

});

module.exports = mongoose.model('assignment', assignmentSchema);

// const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    assignemnt: {type: String, required: true},
    teacher: {type: String, required: true},
    questionType: {type: String, required: true},
    maxPoints: {type: Number, required: true}
});

module.exports = mongoose.model('question', questionSchema);

// const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    question: {type: String, required: true},
    answer: {type: [], required: true},
})

module.exports = mongoose.model('answer', answerSchema);
