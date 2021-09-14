import { combineReducers } from "redux";
import snackbarReducer, { ISnackbarState } from "../common/ezSnackbar/snackbar.reducer";
import userReducer, { IUserState } from "../common/user/user.reducer";
import assignmentReducer, { IAssignmentState } from "../teacher/assignments/assignments.reducer";

export interface IStateTree{
    assignments: IAssignmentState;
    snackbar: ISnackbarState;
    user: IUserState;
}

export default combineReducers({
    assignments: assignmentReducer,
    snackbar: snackbarReducer,
    user: userReducer
})