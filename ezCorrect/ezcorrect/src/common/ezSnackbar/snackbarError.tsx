import * as React from "react";
import {
  Button,
  Snackbar,
  Icon,
  IconButton,
  makeStyles,
  Theme,
  Grid,
  SvgIcon,
} from "@material-ui/core";
import { snackbarActions, ISnackbarState } from "./snackbar.reducer";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { IStateTree } from "../../redux/rootReducer";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

export interface ISnackbar {
  open: boolean;
  message: string;
}

const getSnackbar = createSelector<IStateTree, ISnackbarState, ISnackbar>(
  (state) => state.snackbar,
  (sb) => ({
    open: sb.snackbarErrorOpen,
    message: sb.snackbarErrorMessage,
  })
);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    backgroundColor: "#9A3324",
    borderRadius: "4px",
    color: 'white'
  },
}));

const ErrorSnackbar: React.FC = () => {
  const snackbar = useSelector(getSnackbar);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <Snackbar
        className={classes.root}
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={3000}
        onClose={() => dispatch({ type: snackbarActions.snackbarErrorClear })}
      >
        <Grid container alignItems="center" justify="space-between">
          <Grid item sm={2} lg={1}>
            <IconButton>
              <SvgIcon>
                <NotInterestedIcon />
              </SvgIcon>
            </IconButton>
          </Grid>
          <Grid item sm={8} lg={10}>
            <p style={{ fontSize: "15px" }}>{snackbar.message}</p>
          </Grid>
          <Grid item sm={2} lg={1}>
            <IconButton
              size="small"
              onClick={() =>
                dispatch({ type: snackbarActions.snackbarErrorClear })
              }
              style={{float:'right', marginRight: 10}}
            >
              <SvgIcon>
                <CancelIcon />
              </SvgIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Snackbar>
    </div>
  );
};

export default ErrorSnackbar;
