import express from "express";

import IAssignment, { AssignmentModel } from "../database/model/assignments/assignment.model";
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
    const promise = AssignmentRepo.postAssignment(assignment);

    promise.then((doc) =>{
        res.status(200).json({
            savedData: doc,
            message: 'Data is saved successfully'
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).json({
            message: e._message
        })
    })
})
router.get('', (req, res, next) => {  
    
});
router.get('/metadata', (req, res, next) => {
    const promise = AssignmentRepo.getAllAssignments();

    promise.then((doc: IAssignment[]) => {
        const metadataList = doc.map(d => {
            return {
                title: d.title,
                description: d.description,
                subjects: d.subjects,
                categories: d.categories,
                questions: d.questions.length
            }
        })

        res.status(200).json({
            assignments: metadataList,
            message: 'Fetching data successfull'
        })
    }).catch((e) => {
        console.log(e.error)
        res.status(400).json({
            message: e._message
        })
    })
});
router.delete('/:id', (req, res, next) => {

})
router.put('/:id', (req, res, next) => {

})

export default router;