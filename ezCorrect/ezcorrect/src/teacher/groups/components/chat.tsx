import { makeStyles, TextField } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  input: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

const Chat: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="Meddelande"
        variant="outlined"
      />
    </div>
  );
};

export default Chat;
