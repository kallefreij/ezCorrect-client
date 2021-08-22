const express = require('express');
const assignments = require('../models/assignments');
const Assignments = require('../models/assignments');
const router = express.Router();

router.post('',(req, res, next) =>{
    const requestData = JSON.parse(req.body.assignment);

    // task.save().then(createdTask => {
    //     res.status(201).json({
    //         message: 'Task is added successfully',
    //         task: createdTask
    //     });
    // });
    res.status(200).json({
        message: 'success'
    })

})
router.get('', (req, res, next) => {  
 
});
router.delete('/:id', (req, res, next) => {

})
router.put('/:id', (req, res, next) => {

})

module.exports = router;


// ICreateTestQuestionCards {
//     id: string; 
//     title?: string;
//     description?: string;
//     question?: string;
//     categories?: string[];
//     questionType?: string;
//     subjects?: string[];
//     cardType: string; // Borde inte heller behöva sparas
//     isSelected: boolean; // Behöver inte sparas. 
//     isDragDisabled?: boolean; // Behöver inte sparas -- körs in som false vid start. 
//     answer?: any;
// }









