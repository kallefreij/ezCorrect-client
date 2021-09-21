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

router.get('/single/:id', (req, res, next) => {
    const promise = AssignmentRepo.getAssignment(req.params.id);
    promise
    .then((doc: IAssignment | null) => {
        res.status(200).json({
            assignment: doc,
            message: 'Fetching data successfull'
        })
    })
    .catch(e => {
        res.status(400).json({
            message: e._message
        })
    })
});

router.get('/metadata/:username', (req, res, next) => {
    console.log(req.params.username)
    const promise = AssignmentRepo.getAllAssignments(req.params.username);

    promise.then((doc: IAssignment[]) => {
        const metadataList = doc.map(d => {
            return {
                _id: d._id,
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
router.delete('', (req, res, next) => {

    const promise = AssignmentRepo.deleteAssignment(req.body.id);

    promise.then((doc: IAssignment) => {
        res.status(200).json({
            message: 'Assignment removed'
        })
    }).catch((error) => {
        res.status(400).json({
            message: 'Remove assignment failed due to '
        })
    })

})
router.put('/:id', (req, res, next) => {
    
})

export default router;