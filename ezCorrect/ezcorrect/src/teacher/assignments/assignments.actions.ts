import { IQuestion } from "./assignments.interfaces";
import { assignmentsActions } from "./assignments.reducer"
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";

 
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

export const setMultiChoiceAlts = (alts: IMultiChoiceAlts[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setMultiChoiceAlts, payload: alts});
}

export const setSingleChoiceAlts = (alts: ISingleChoiceAlts[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setSingleChoiceAlts, payload: alts});
}