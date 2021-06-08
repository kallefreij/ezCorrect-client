import { IAssignmentMetaData, IQuestion } from "./assignments.interfaces";
import { IMultiChoiceAlts } from "./components/create-assignment/multiChoiceQuestion/multiCoiceQuestion";
import { ISingleChoiceAlts } from "./components/create-assignment/singleChoiceQuestion/singleChoiceQuestion";

export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
    deleteAssignments: "AssignmentAction/deleteAssignments",
    deleteAssignmentsSuccessful: "AssignmentAction/deleteAssignmentsSuccessful",
    deleteAssignmentsFailed: "AssignmentAction/deleteAssignmentsFailed",
    setSelectedQuestion: "AssignmentAction/setSelectedQuestion",
    setMultiChoiceAlts: 'AssignmentAction/setMultiChoiceAlts',
    setSingleChoiceAlts: 'AssignmentAction/setSingleChoiceAlts'
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    deleteAssignments: boolean;
    deleteAssignmentsSuccessful: boolean;
    deleteAssignmentsFailed: boolean;
    assignmentMetadata: IAssignmentMetaData[];
    questions: IQuestion[];
    selectedQuestion: IQuestion;
    multiChoiceAlts: IMultiChoiceAlts[];
    singleChoiceAlts: ISingleChoiceAlts[];
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    deleteAssignments: false,
    deleteAssignmentsSuccessful: false,
    deleteAssignmentsFailed: false,
    assignmentMetadata: [],
    questions: [
        {id: "1", question: "Hur mycket hår har Roger?", answer: "", number: 1, color: "#D0A1A1"},
        {id: "2", question: "Vem vann minigolfen?", answer: "", number: 2, color: "#A1D0A5"},
        {id: "3", question: "1 + 1?", answer: "", number: 3, color: "#D0A1A1"},
        {id: "4", question: "Vem vill bli miljonär?", answer: "", number: 4, color: "#A1D0A5"},
        {id: "5", question: "Vad heter Karlsson på taket i förnamn?", answer: "", number: 5, color: "#A1D0A5"},
        {id: "6", question: "Vem var Sveriges först president?", answer: "", number: 6, color: "#A1D0A5"},
        {id: "7", question: "1 * 500?", answer: "", number: 7, color: "#A1D0A5"},
        {id: "8", question: "Hur mycket hår har Roger?", answer: "", number: 8, color: "#D0A1A1"},
        {id: "9", question: "Vem vann minigolfen?", answer: "", number: 9, color: "#A1D0A5"},
        {id: "10", question: "1 + 1?", answer: "", number: 10, color: "#D0A1A1"},
        {id: "11", question: "Vem vill bli miljonär?", answer: "", number: 11, color: "#A1D0A5"},
        {id: "12", question: "Vad heter Karlsson på taket i förnamn?", answer: "", number: 12, color: "#A1D0A5"},
        {id: "13", question: "Vem var Sveriges först president?", answer: "", number: 13, color: "#A1D0A5"},
        {id: "14", question: "1 * 500?",answer: "", number: 14, color: "#A1D0A5"},
    ],
    selectedQuestion: {id: "14", question: "1 * 500?",answer: "", number: 14, color: "#A1D0A5"},
    multiChoiceAlts: [],
    singleChoiceAlts: [],
}

const assignmentReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case assignmentsActions.fetchAssignmentMetaData:
            return{
                ...state,
                fetchingAssignmentMetaData: true,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: false,
            };
        case assignmentsActions.fetchAssignmentMetaDataSuccessful:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: true,
                fetchingAssignmentMetaDataFailed: false,
                assignmentMetadata: action.payload,
            };
        case assignmentsActions.fetchAssignmentMetaDataFailed:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: true,
            };
        case assignmentsActions.deleteAssignments:
            return{
                ...state,
                deleteAssignments: true,
                deleteAssignmentsSuccessful: false,
                deleteAssignmentsFailed: false
            };
        case assignmentsActions.deleteAssignmentsSuccessful:
            return{
                ...state,
                deleteAssignments: false,
                deleteAssignmentsSuccessful: true,
                deleteAssignmentsFailed: false,
                assignmentMetadata: [...state.assignmentMetadata.filter(x => !action.payload.includes(x.id))]
            };
        case assignmentsActions.deleteAssignmentsFailed:
            return{
                ...state,
                deleteAssignments: false,
                deleteAssignmentsSuccessful: false,
                deleteAssignmentsFailed: true
            };
        case assignmentsActions.setSelectedQuestion:
            return{
                ...state,
                selectedQuestion: action.payload
            }
        case assignmentsActions.setMultiChoiceAlts:
            return{
                ...state,
                multiChoiceAlts: action.payload
            }
        case assignmentsActions.setSingleChoiceAlts:
            return{
                ...state,
                singleChoiceAlts: action.payload
            }
        default:
            return state;
    }
}

export default assignmentReducer;