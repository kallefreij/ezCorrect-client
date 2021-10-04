import { showSnackbar, showSnackbarError } from "../../common/ezSnackbar/snackbar.actions";
import { ICreateScheduledAssignment, IQuestion, IScheduledAssignment } from "./assignments.interfaces";
import { assignmentsActions } from "./assignments.reducer"
import { ICreateTestQuestionCards } from "./components/create-assignment/createAssignment";
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";
import { ITextAnswer } from "./components/create-assignment/textAnswer/textAnswer";

 
const axios = require('axios').default;

export const fetchAssignmentsNow = (user:string) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchAssignmentMetaData});    
    const res = await axios.get('http://localhost:4000/api/assignments/metadata/' + user);
    if(res.status === 200){
        dispatch({type: assignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res.data.assignments});
    }  
    else 
        dispatch({type: assignmentsActions.fetchAssignmentMetaDataFailed});
}

export const fetchScheduledAssignmentsNow = (user:string) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchScheduledAssignment});    
    const res = await axios.get('http://localhost:4000/api/assignments/scheduled/' + user);
    if(res.status === 200){
        console.log(res.data)
        dispatch({type: assignmentsActions.fetchScheduledAssignmentSuccessful, payload: res.data.assignments});
    }  
    else {
        dispatch({type: assignmentsActions.fetchScheduledAssignmentFailed});
    }       
}

export const deleteAssignments = (ids: string[]) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.deleteAssignments});

    await axios.delete('http://localhost:4000/api/assignments/', {
            data: {
                id: ids
            }
        })
        .then((res: any) => {
            console.log(res)
            dispatch({type: assignmentsActions.deleteAssignmentsSuccessful, payload: ids})
        })
        .catch((err: any) => {
            console.log(err.message)
            dispatch({type: assignmentsActions.deleteAssignmentsFailed})
        })

}

export const getAssignment = (id: string) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchAssignment});
    await axios.get('http://localhost:4000/api/assignments/single/' + id)
        .then((res: any) => {
            dispatch({type: assignmentsActions.fetchAssignmentSuccessful});

            let questionCards: ICreateTestQuestionCards[] = [
                {id: '1', title: res.data.assignment.title, description: res.data.assignment.description, categories: [], subjects: [], cardType: 'header', isSelected: false},
            ]
            let id = 3;
            res.data.assignment.questions.forEach((q: any) => {
                console.log(q)
                questionCards.push({id: id.toString(), question: q.question, questionType: q.questionType, cardType: 'question', isSelected: false, isDragDisabled: true, answer: null})
                id++
            });
            dispatch({type: assignmentsActions.editAssignment, payload: questionCards});
        })
        .catch((err: any) => {
            dispatch({type: assignmentsActions.fetchAssignmentFailed});
        })

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

export const setTextAnswer = (answers: ITextAnswer[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setTextAnswer, payload: answers});
}

export const updateQuestion = (question: IQuestion, questions: IQuestion[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.updateQuestion, payload: {q: question, qs: questions}})
}

export const setCreateTestQuestions = (createTestQuestions: ICreateTestQuestionCards[]) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setCreateTestQuestion, payload: createTestQuestions})
}

export const setSaveLoadingStatus = (loading: boolean) => async (dispatch:any) => {
    dispatch({type: assignmentsActions.setSaveLoadingStatus, payload: loading})
}

export const saveAssignment = (createTestQuestions: ICreateTestQuestionCards[]) => async (dispatch: any) => {
    await axios.post('http://localhost:4000/api/assignments', {assignment: createTestQuestions})
        .then((res: any) => {
            console.log(res)
            console.log("Successfull post to database")
            dispatch(setSaveLoadingStatus(false))
            dispatch(showSnackbar("Provet är sparat")) 
        })
        .catch((err: any) => {
            console.log(err)
            dispatch(setSaveLoadingStatus(false))
            dispatch(showSnackbarError("Kunde inte spara prov")) 
        })
}

export const saveScheduledAssignment = (scheduledAssignment:ICreateScheduledAssignment) => async (dispatch: any) => {
    await axios.post('http://localhost:4000/api/assignments/scheduled', {assignment: scheduledAssignment})
        .then((res: any) => {
            console.log(res)
            console.log("Successful post to database")
            dispatch(setSaveLoadingStatus(false))
            dispatch(showSnackbar("Provet är sparat")) 
        })
        .catch((err: any) => {
            console.log(err)
            dispatch(setSaveLoadingStatus(false))
            dispatch(showSnackbarError("Kunde inte spara prov")) 
        })
}

export const setSelectedAssignment = (assignment: any) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.setSelectedAssignment, payload: assignment})
}
