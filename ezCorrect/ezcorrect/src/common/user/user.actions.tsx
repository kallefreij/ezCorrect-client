import { IUser, userActions } from "./user.reducer";

export const setUserState = (user: IUser) => async (dispatch: any) => {
    dispatch({type: userActions.setUserReduxState, payload: user});
}