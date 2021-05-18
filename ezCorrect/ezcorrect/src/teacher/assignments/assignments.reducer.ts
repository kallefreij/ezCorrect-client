import { IAssignmentMetaData } from "./assignments.interfaces";

export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
    deleteAssignments: "AssignmentAction/deleteAssignments",
    deleteAssignmentsSuccessful: "AssignmentAction/deleteAssignmentsSuccessful",
    deleteAssignmentsFailed: "AssignmentAction/deleteAssignmentsFailed"
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    deleteAssignments: boolean;
    deleteAssignmentsSuccessful: boolean;
    deleteAssignmentsFailed: boolean;
    assignmentMetadata: IAssignmentMetaData[]
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    deleteAssignments: false,
    deleteAssignmentsSuccessful: false,
    deleteAssignmentsFailed: false,
    assignmentMetadata: []
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
        default:
            return state;
    }
}

export default assignmentReducer;