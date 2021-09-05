import { IAssignmentMetaData, IQuestion } from "./assignments.interfaces";
import { assignmentsActions } from "./assignments.reducer"
import Header from "./components/correct-assignment/header";
import { ICreateTestQuestionCards } from "./components/create-assignment/createAssignment";
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";
import { ITextAnswer } from "./components/create-assignment/textAnswer/textAnswer";

 
const axios = require('axios').default;

export const fetchAssignmentsNow = () => async (dispatch: any) => {
    dispatch({type: assignmentsActions.fetchAssignmentMetaData});    
    const res = await axios.get('http://localhost:4000/api/assignments/metadata');

    if(res.status === 200){
        console.log(res.data.assignments)
        dispatch({type: assignmentsActions.fetchAssignmentMetaDataSuccessful, payload: res.data.assignments});
    }  
    else 
        dispatch({type: assignmentsActions.fetchAssignmentMetaDataFailed});
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
            console.log(res)
            dispatch({type: assignmentsActions.fetchAssignmentSuccessful});
            let questionCards = [
                {id: '1', title: res.data.assignment.title, description: res.data.assignment.description, categories: [], subjects: [], cardType: 'header', isSelected: false},
                {id: '2', question: '', questionType: '', cardType: 'question', isSelected: true, isDragDisabled: true, answer: null}
            ]
            let id = 3;
            res.data.assignment.questions.forEach((q: any) => {
                console.log(q)
                questionCards.push({id: id.toString(), question: q.question, questionType: q.questionType, cardType: 'question', isSelected: false, isDragDisabled: true, answer: null})
                id++
            });
            //dispatch({type: assignmentsActions.editAssignment, payload: res.data.assignment.questions});
            dispatch({type: assignmentsActions.editAssignment, payload: questionCards});
        })
        .catch((err: any) => {
            console.log(err.message)
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

    console.log(createTestQuestions)

    await axios.post('http://localhost:4000/api/assignments', {assignment: createTestQuestions})
        .then((res: any) => {
            console.log(res)
            console.log("Successfull post to database")
            dispatch(setSaveLoadingStatus(false))
        })
        .catch((err: any) => {
            console.log(err)
            dispatch(setSaveLoadingStatus(false))
        })

}

export const setSelectedAssignment = (assignment: any) => async (dispatch: any) => {
    dispatch({type: assignmentsActions.setSelectedAssignment, payload: assignment})
}
