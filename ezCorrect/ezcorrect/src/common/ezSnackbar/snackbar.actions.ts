import { snackbarActions } from "./snackbar.reducer";

export const showSnackbar = (message: any) => async (dispatch: any) => {
  // return (dispatch) => {
  //   dispatch({ type: snackbarActions.snackbarSuccessOpen, payload: message });
  // };
  dispatch({ type: snackbarActions.snackbarSuccessOpen, payload: message });
};

export const clearSnackbar = () => async (dispatch: any) => {
  // return (dispatch) => {
  //   dispatch({ type: snackbarActions.snackbarSuccessClear });
  // };
  dispatch({ type: snackbarActions.snackbarSuccessClear });
};

export const showSnackbarError = (message: any) => async (dispatch: any) => {
  // return (dispatch) => {
  //   dispatch({ type: snackbarActions.snackbarSuccessOpen, payload: message });
  // };
  dispatch({ type: snackbarActions.snackbarErrorOpen, payload: message });
};

export const clearSnackbarError = () => async (dispatch: any) => {
  // return (dispatch) => {
  //   dispatch({ type: snackbarActions.snackbarSuccessClear });
  // };
  dispatch({ type: snackbarActions.snackbarErrorClear });
};
