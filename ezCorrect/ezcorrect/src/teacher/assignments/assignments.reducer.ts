export const assignmentsActions = {
    fetchAssignmentMetaData: "AssignmentAction/fetchAssignmentMetaData",
    fetchAssignmentMetaDataSuccessful: "AssignmentAction/fetchAssignmentMetaDataSuccessful",
    fetchAssignmentMetaDataFailed: "AssignmentAction/fetchAssignmentMetaDataFailed",
}

export interface IAssignmentState {
    fetchingAssignmentMetaData: boolean;
    fetchingAssignmentMetaDataSuccessful: boolean;
    fetchingAssignmentMetaDataFailed: boolean;
    AssignmentMetaData: []
}

const intitialState: IAssignmentState = {
    fetchingAssignmentMetaData: false,
    fetchingAssignmentMetaDataSuccessful: false,
    fetchingAssignmentMetaDataFailed: false,
    AssignmentMetaData: []
}

const assignmentReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case assignmentsActions.fetchAssignmentMetaData:
            return{
                fetchingAssignmentMetaData: true,
                fetchingAssignmentMetaDataSuccessful: false,
                fetchingAssignmentMetaDataFailed: false,
            };
        case assignmentsActions.fetchAssignmentMetaData:
            return{
                fetchingAssignmentMetaData: false,
                fetchingAssignmentMetaDataSuccessful: true,
                fetchingAssignmentMetaDataFailed: false,
                AssignmentMetaData: action.payload,
            };
        case assignmentsActions.fetchAssignmentMetaData:
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