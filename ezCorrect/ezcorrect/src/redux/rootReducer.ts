import { combineReducers } from "redux";
import snackbarReducer, { ISnackbarState } from "../common/ezSnackbar/snackbar.reducer";
import userReducer, { IUserState } from "../common/user/user.reducer";
import studentAssignmentReducer, { IStudentAssignmentState } from "../student/assignments/student.assignments.reducer";
import assignmentReducer, { IAssignmentState } from "../teacher/assignments/assignments.reducer";

export interface IStateTree{
    //Student
    studentAssignments: IStudentAssignmentState;

    //Teacher
    assignments: IAssignmentState;

    //Common
    snackbar: ISnackbarState;
    user: IUserState;
}

export default combineReducers({
    //Student
    studentAssignments: studentAssignmentReducer,

    //Teacher
    assignments: assignmentReducer,

    //Common
    snackbar: snackbarReducer,
    user: userReducer
})