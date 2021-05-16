const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.post('',(req, res, next) =>{
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    });
    category.save().then(category => {
        res.status(201).json({
            message: 'Category is added successfully',
            category: category
        });
    });
})
router.get('', (req, res, next) => {  
    Category.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            categories: documents
        });
    });  
});
router.delete('/:id', (req, res, next) => {
    Category.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Category is deleted!'});
    });
})
router.put('/:id', (req, res, next) => {
    const category = new Category({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description
    })
    Category.updateOne({_id: req.params.id}, category).then((result) => {
        res.status(200).json({message: 'Category is updated!', category: category});
    });
})

module.exports = router;