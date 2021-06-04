import { IQuestion } from "./assignments.interfaces";
import { assignmentsActions } from "./assignments.reducer"

 
const axios = require('axios').default;

export const fetchAssignmentsNow = () => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchAssignmentMetaData});    
    const res = await axios.get('http://localhost:4000/api/tasks/metaData');
    if(res.status == 200) dispatch({type: assignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res.data.tasks});
    else dispatch({type: assignmentsActions.fetchAssignmentMetaDataFailed});
}

export const deleteAssignments = (ids: string[]) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.deleteAssignments});
    // const res = await axios.delete('dasdasda');
    // if(res.status == 200) dispatch({type: assignmentsActions.deleteAssignmentsSuccessful, payload: ids})
    //else dispatch({type: assignmentsActions.deleteAssignmentsFailed});
    dispatch({type: assignmentsActions.deleteAssignmentsSuccessful, payload: ids});
}

export const setSelectedQuestion = (question: IQuestion) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setSelectedQuestion, payload: question});
}

export const updateQuestion = (question: IQuestion, questions: IQuestion[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.updateQuestion, payload: {q: question, qs: questions}})
}