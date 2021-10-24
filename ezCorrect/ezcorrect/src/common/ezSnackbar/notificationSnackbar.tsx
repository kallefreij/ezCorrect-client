import { Button, createStyles, IconButton, makeStyles, Snackbar, Theme } from '@material-ui/core';
import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { createSelector } from 'reselect';
import { IStateTree } from '../../redux/rootReducer';
import { ISnackbarState } from './snackbar.reducer';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Countdown from 'react-countdown';

const getSnackbarState = createSelector<IStateTree, ISnackbarState, boolean>(
    (state) => state.snackbar,
    (sb) => sb.notificationSnackbarOpen
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startButton: {
      backgroundColor: '#A1D0A5',
      height: 30,
      width: 30,
      clipPath: 'polygon(0 0, 0% 100%, 85% 50%);',
      color: '#fff',
      margin: '0 auto',
      marginLeft: 50,
    },
    root: {
        "& .MuiSnackbarContent-root": {
            backgroundColor: 'white',
            cursor: 'pointer',
            color: 'black',
            border: '1px solid #A1D0A5',
            fontWeight: 'bold'
        }        
    }
  }),
);

const NotificationSnackbar:React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const snackbarState = useSelector(getSnackbarState);
    const classes = useStyles();
    const history = useHistory();
    const [isAssignmentStartable, setIsAssignmentStartable] = React.useState<boolean>(false);
    const handleClick = () => {
        history.push('/student/assignment/start')
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStop = () => {
      setIsAssignmentStartable(true)
    }

    const action = (
        <React.Fragment>
            <div className={classes.startButton}/>         
            {/* <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton> */}
        </React.Fragment>
      );

    const countDownText =  (
        <React.Fragment>
            <p style={{margin:0}}>Provet börjar om: <Countdown date={Date.now() + 10000} onComplete={handleStop}/></p>
        </React.Fragment>     
    )
    const finsihedCountDownText = (
        <React.Fragment>
            <p style={{margin:0}}>Du har ett prov som har börjat</p>
        </React.Fragment>
    )

    return (
            <Snackbar
                className={classes.root}
                open={snackbarState}
                onClose={handleClose}
                message={!isAssignmentStartable ? countDownText : finsihedCountDownText}
                action={action}
                anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                onClick={handleClick}
            />
    )
}

export default NotificationSnackbar;