import { IAssignmentMetaData } from "./assignments.interfaces";

export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    assignmentMetadata: IAssignmentMetaData[]
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    assignmentMetadata: []
}

const assignmentReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case assignmentsActions.fetchAssignmentMetaData:
            return{
                fetchingAssignmentMetaData: true,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: false,
            };
        case assignmentsActions.fetchAssignmentMetaDataSuccessful:
            return{
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: true,
                fetchingAssignmentMetaDataFailed: false,
                assignmentMetadata: action.payload,
            };
        case assignmentsActions.fetchAssignmentMetaDataFailed:
            return{
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: true,
            };
        default:
            return state;
    }
}

export default assignmentReducer;