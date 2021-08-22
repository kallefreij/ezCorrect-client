import express from "express";

import { AssignmentModel } from "../database/model/assignments/assignment.model";
import { AlternativesModel } from "../database/model/assignments/alternatives.model";
import { MultiChoiceAnswerModel } from "../database/model/assignments/multichoiceQuestion.model";
import { SingleChoiceAnswerModel } from "../database/model/assignments/singlechoiceQuestion.model";
import { TextAnswerModel } from "../database/model/assignments/textQuestion.model";
import AssignmentRepo from "../database/repository/assignments/assignment.repo";
import { AssignmentUtil } from "../helpers/assignment.util";

const router = express.Router();

router.post('',(req, res, next) =>{

    // TODO 
    // Här eller i denna kedja lär jag skapa en validering av något slag.
    // Ett sätt att hantera misslyckade calls. 
    // Är detta asynch ?

    const assignment = AssignmentUtil.createModels(req.body);

    const result = AssignmentRepo.postAssignment(assignment);

    result.then((doc) =>{
        res.status(200).json({
            savedData: doc,
            message: 'Data is saved successfully'
        })
    }).catch((e) => {
        console.log("Fail");
        res.status(400).json({
            message: e._message
        })
    })

    // res.status(200).json({
    //     savedData: result,
    //     message: 'success'
    // })

})
router.get('', (req, res, next) => {  
 
});
router.delete('/:id', (req, res, next) => {

})
router.put('/:id', (req, res, next) => {

})

export default router;