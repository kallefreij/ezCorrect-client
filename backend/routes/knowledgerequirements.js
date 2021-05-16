const express = require('express');
const Knowledgerequirement = require('../models/knowledgerequirement');
const router = express.Router();

router.post('',(req, res, next) =>{
    const todaysDate = new Date().toLocaleDateString().toString();
    const knowledgerequirement = new Knowledgerequirement({
        title: req.body.title,
        description: req.body.description,
        belongsTo: req.body.belongsTo,
        created_at: todaysDate
    })
    knowledgerequirement.save().then(createdKnowledgerequirement => {
        res.status(201).json({
            message: 'Knowledgerequirement is added successfully',
            id: createdKnowledgerequirement._id
        });
    });
})
router.get('', (req, res, next) => {
    Knowledgerequirement.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            knowledgerequirement: documents
        });
    });
});
router.delete('/:id', (req, res, next) => {
    Knowledgerequirement.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Knowledgerequirement is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    const knowledgerequirement = new Knowledgerequirement({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        belongsTo: req.body.belongsTo,
        created_at: new Date().toLocaleDateString().toString()
    })
    Knowledgerequirement.updateOne({_id: req.params.id}, knowledgerequirement).then((result) => {
        res.status(200).json({message: 'Knowledgerequirement is updated!', knowledgerequirement: knowledgerequirement});
        console.log(knowledgerequirement);
    });
})

module.exports = router;
