const express = require('express');
const Subject = require('../models/subject');
const router = express.Router();

router.post('',(req, res, next) =>{
    const todaysDate = new Date().toLocaleDateString().toString();
    const subject = new Subject({
        title: req.body.title,
        description: req.body.description,
        created_at: todaysDate
    })
    subject.save().then(createdSubject => {
        res.status(201).json({
            message: 'Subject is added successfully',
            id: createdSubject._id
        });
    });
})
router.get('', (req, res, next) => {
    Subject.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            subjects: documents
        });
    });
});
router.delete('/:id', (req, res, next) => {
    Subject.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Subject is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    console.log(req.body);
    const subject = new Subject({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        created_at: new Date().toLocaleDateString().toString()
    })
    Subject.updateOne({_id: req.params.id}, subject).then((result) => {
        res.status(200).json({message: 'Subject is updated!', subject: subject});
    });
})

module.exports = router;
