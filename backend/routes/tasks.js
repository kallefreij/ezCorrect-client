const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.post('',(req, res, next) =>{
    const todaysDate = new Date().toLocaleDateString().toString();
    const task = new Task({
        title: req.body.title,
        subjects: req.body.subjects,
        knowledgerequirements: req.body.knowledgerequirements,
        milestones: req.body.milestones,
        questions: req.body.questions,
        dateStamp: todaysDate,
        schoolClasses: req.body.schoolClasses
    });
    task.save().then(createdTask => {
        res.status(201).json({
            message: 'Task is added successfully',
            task: createdTask
        });
    });
})
router.get('', (req, res, next) => {
    Task.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            tasks: documents
        });
    });
});
router.get('/:id', (req, res, next) =>{
    Task.findById(req.params.id).then(task => {
        if(task){
            return res.status(200).json(task)

        }
        else{
            return res.status(404).json({message: 'Task not found'})
        }
    })
})
router.delete('/:id', (req, res, next) => {
    Task.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Task is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    const task = new Task({
        _id: req.params.id,
        title: req.body.title,
        subjects: req.body.subjects,
        knowledgerequirements: req.body.knowledgerequirements,
        milestones: req.body.milestones,
        questions: req.body.questions,
        schoolClasses: req.body.schoolClasses,
        datestamp: new Date().toLocaleDateString().toString()
    })
    Task.updateOne({_id: req.params.id}, task).then((result) => {
        res.status(200).json({message: 'Task is updated!', task: task});
    });
})

module.exports = router;
