const express = require('express');
const Assignments = require('../models/assignments');
const router = express.Router();

router.post('',(req, res, next) =>{
    console.log(JSON.parse(req.body.assignment))
    const obj = JSON.parse(req.body.assignment);
    let result;
    for(let i = 0; i < 2000000; i++){
        for(let j = 0; j < 10000; j++){
            result = obj;
        }
    }

    res.json({
        message: result
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









