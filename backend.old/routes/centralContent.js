const express = require('express');
const CentralContent = require('../models/centralContent');
const router = express.Router();

router.post('',(req, res, next) =>{
    const todaysDate = new Date().toLocaleDateString().toString();
    const centralContent = new CentralContent({
        title: req.body.title,
        elements: req.body.elements,
        belongsTo: req.body.belongsTo,
        created_at: todaysDate
    })
    centralContent.save().then(createdCentralContent => {
        res.status(201).json({
            message: 'Central content for a subject is added successfully',
            id: createdCentralContent._id
        });
    });
})
router.get('', (req, res, next) => {
    CentralContent.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            centralContent: documents
        });
    });
});
router.delete('/:id', (req, res, next) => {
    CentralContent.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'CentralContent is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    const centralContent = new CentralContent({
        _id: req.params.id,
        title: req.params.title,
        elements: req.body.elements,
        belongsTo: req.body.belongsTo,
        created_at: new Date().toLocaleDateString().toString()
    })
    CentralContent.updateOne({_id: req.params.id}, centralContent).then((result) => {
        res.status(200).json({message: 'Central content is updated!', centralContent: centralContent});
        console.log(centralContent);
    });
})

module.exports = router;
