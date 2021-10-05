export const userActions = {
    setUserReduxState: 'userActions/setUserReduxState'
}

export interface IUser {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[]
}

export interface IUserState {
    loggedInUser: IUser;
}

const intitialState: IUserState = {
    loggedInUser: {username: "", email: "", firstName: "", lastName:"", roles:[]}
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