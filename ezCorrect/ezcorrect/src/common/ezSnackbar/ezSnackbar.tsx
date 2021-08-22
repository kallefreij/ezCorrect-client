import { makeStyles, Snackbar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: 20,
        borderRadius: 10,
        color: 'white'
    },
});


const EzSnackbar: React.FC = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}/>
    );
};

export default EzSnackbar;