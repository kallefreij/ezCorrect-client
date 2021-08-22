const express = require('express');
const Student = require('../models/student');
const router = express.Router();



router.post('',(req, res, next) =>{
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        schoolClass: req.body.schoolClass,
        email: req.body.email
    });

    student.save().then(createdStudent => {
        res.status(201).json({
            message: 'Student is added successfully',
            id: createdStudent._id
        });
    });
})

router.get('', (req, res, next) => {  
    Student.find().then(documents => {
        res.status(200).json({
            message: 'Data is fetched!',
            students: documents
        });
    });  
});

router.get('/getSchoolClasses', (req, res, next) => {
    let schoolClassArray = JSON.parse(req.query.dataParam);
    let schoolClassArrayString = [];
    schoolClassArray.forEach(element => {
        schoolClassArrayString.push(element.title);
    });
    Student.find().then((doc) => {
        let result = doc.filter((student)=>{
            if(schoolClassArrayString.includes(student.schoolClass)){
                return student;
            }
        })
        res.status(200).json({
            message: 'Data is fetched!',
            students: result
        });
    }); 

})

router.get('/:id', (req, res, next) =>{
    Student.findById(req.params.id).then(student => {
        if(student){
            return res.status(200).json(student)
        }   
        else{
            return res.status(404).json({message: 'Student not found'})
        }
    })
})


router.delete('/:id', (req, res, next) => {
    Student.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({message: 'Student is deleted!'});
    });
})

router.put('/:id', (req, res, next) => {
    const student = new Student({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        schoolClass: req.body.schoolClass,
        email: req.body.email
    });
    Student.updateOne({_id: req.params.id}, student).then((result) => {
        res.status(200).json({message: 'Student is updated!', student: student});
    });
})

module.exports = router;