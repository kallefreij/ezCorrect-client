import { IStudentAssignmentMetaData } from "./student.assignment.interfaces";

export const studentAssignmentsActions = {
    fetchAssignmentMetaData: "StudentAssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "StudentAssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "StudentAssignmentAction/fetchAssignmentMetaDataFailed",
}

export interface IStudentAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    assignmentMetadata: IStudentAssignmentMetaData[];
}

const intitialState: IStudentAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    assignmentMetadata: [],
}

const studentAssignmentReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case studentAssignmentsActions.fetchAssignmentMetaData:
            return{
                ...state,
                fetchingAssignmentMetaData: true,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: false,
            };
        case studentAssignmentsActions.fetchAssignmentMetaDataSuccessful:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: true,
                fetchingAssignmentMetaDataFailed: false,
                assignmentMetadata: action.payload,
            };
        case studentAssignmentsActions.fetchAssignmentMetaDataFailed:
            return{
                ...state,
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: true,
            };
        default:
            return state;
    }
}

export default studentAssignmentReducer;