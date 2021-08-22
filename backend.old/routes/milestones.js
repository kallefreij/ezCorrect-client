const express = require('express');
const Milestone = require('../models/milestone');
const router = express.Router();

router.post('',(req, res, next) =>{
    const todaysDate = new Date().toLocaleDateString().toString();
    const milestone = new Milestone({
        title: req.body.title,
        description: req.body.description,
        belongsTo: req.body.belongsTo,
        created_at: todaysDate
    })
    milestone.save().then(createdMilestone => {
        res.status(201).json({
            message: 'Milestone is added successfully',
            id: createdMilestone._id
        });
    });
})
router.get('', (req, res, next) => {
    Milestone.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            milestones: documents
        });
    });
});
router.delete('/:id', (req, res, next) => {
    Milestone.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Milestone is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    const milestone = new Milestone({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        belongsTo: req.body.belongsTo,
        created_at: new Date().toLocaleDateString().toString()
    })

    Milestone.updateOne({_id: req.params.id}, milestone).then((result) => {
        res.status(200).json({message: 'Milestone is updated!', milestone: milestone});
        console.log(milestone);
    });
})

module.exports = router;
