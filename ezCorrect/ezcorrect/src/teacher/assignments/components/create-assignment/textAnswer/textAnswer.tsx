import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const TextAnswer: React.FC = () => {
    
    const classes = useStyles();

    return (
        <TextField
          className={classes.root}
          label="Önskat svar:"
          multiline
          rows={4}
        />
    );
};

export default TextAnswer;