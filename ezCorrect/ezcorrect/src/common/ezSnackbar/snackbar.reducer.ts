export const snackbarActions = {
  snackbarSuccessOpen: "SnackbarActions/snackbarSuccessOpen",
  snackbarSuccessClear: "SnackbarActions/snackbarSuccessClear",
  snackbarErrorOpen: "SnackbarActions/snackbarErrorOpen",
  snackbarErrorClear: "SnackbarActions/snackbarErrorClear",
};

export interface ISnackbarState {
  snackbarSuccessOpen: boolean;
  snackbarSuccessMessage: string;
  snackbarErrorOpen: boolean;
  snackbarErrorMessage: string;
  notificationSnackbarOpen: boolean;
}

const intialState: ISnackbarState = {
  snackbarSuccessOpen: false,
  snackbarSuccessMessage: "",
  snackbarErrorOpen: false,
  snackbarErrorMessage: "",
  notificationSnackbarOpen: false
};

const snackbarReducer = (state: ISnackbarState = intialState, action: any) => {
  switch (action.type) {
    case snackbarActions.snackbarSuccessClear:
      return {
        ...state,
        snackbarSuccessOpen: false,
      };
    case snackbarActions.snackbarSuccessOpen:
      return {
        ...state,
        snackbarSuccessOpen: true,
        snackbarSuccessMessage: action.payload,
      };
    case snackbarActions.snackbarErrorClear:
      return {
        ...state,
        snackbarErrorOpen: false,
      };
    case snackbarActions.snackbarErrorOpen:
      return {
        ...state,
        snackbarErrorOpen: true,
        snackbarErrorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default snackbarReducer;
