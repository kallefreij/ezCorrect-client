import { combineReducers } from "redux";
import snackbarReducer, { ISnackbarState } from "../common/ezSnackbar/snackbar.reducer";
import assignmentReducer, { IAssignmentState } from "../teacher/assignments/assignments.reducer";

export interface IStateTree{
    assignments: IAssignmentState;
    snackbar: ISnackbarState;
}

export default combineReducers({
    assignments: assignmentReducer,
    snackbar: snackbarReducer
})