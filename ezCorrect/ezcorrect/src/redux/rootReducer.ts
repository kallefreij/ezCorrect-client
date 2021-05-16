import { combineReducers } from "redux";
import assignmentReducer, { IAssignmentState } from "../teacher/assignments/assignments.reducer";

export interface IStateTree{
    assignment: IAssignmentState;
}

export default combineReducers({
    assignments: assignmentReducer,
})