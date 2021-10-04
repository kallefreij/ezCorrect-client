export const userActions = {
    setUserReduxState: 'userActions/setUserReduxState'
}

export interface IUser {
    username: string;
    // firstName: string;
    // lastName: string;
    email: string;
}

export interface IUserState {
    loggedInUser: IUser;
}

const intitialState: IUserState = {
    loggedInUser: {username: "", email: ""}
}

const userReducer = (state = intitialState, action: any) => {
    switch(action.type){
        case userActions.setUserReduxState:
            return{
                ...state,
                loggedInUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;