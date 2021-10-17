import express from "express";
import IAssignment, { AssignmentModel } from "../database/model/assignments/assignment.model";
import IScheduledAssignment, { ScheduledAssignmentModel } from "../database/model/assignments/scheduledAssignment.model";
import ScheduledAssignmentRepo from "../database/repository/assignments/scheduledAssignment.repo";

const router = express.Router();

router.post('',(req, res, next) =>{
    const promise = ScheduledAssignmentRepo.postScheduledAssignment(new ScheduledAssignmentModel(req.body.assignment));
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

router.get('/:username', (req, res, next) => {
    const promise = ScheduledAssignmentRepo.getAllScheduledAssignments(req.params.username);

    promise.then((doc: IScheduledAssignment[]) => {
        res.status(200).json({
            assignments: doc,
            message: 'Fetching data successfull'
        })
    }).catch((e) => {
        console.log(e.error)
        res.status(400).json({
            message: e._message
        })
    })
});

router.get('/studentAssignmentsMetaData/:username', (req, res, next) => {
    const promise = ScheduledAssignmentRepo.getAllStudentAssignmentsMetaData(req.params.username);

    promise.then((doc: IScheduledAssignment[]) => {
        res.status(200).json({
            assignments: doc,
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

    const promise = ScheduledAssignmentRepo.deleteScheduledAssignment(req.body.id);

    promise.then((doc: IAssignment) => {
        res.status(200).json({
            message: 'Scheduled assignment removed'
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
