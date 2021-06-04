import { makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const TextAnswer: React.FC = () => {
    
    const classes = useStyles();
    const [txtValue, setTxtValue] = useState('');

    const handleInput = (input: any) => {
        setTxtValue(input.target.value);
    }

    return (
        <TextField
          className={classes.root}
          label="Önskat svar:"
          onChange={(e) => handleInput(e)}
          multiline
          rows={4}
        />
    );
};

export default TextAnswer;