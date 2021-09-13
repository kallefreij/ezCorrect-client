import {
  Radio,
  FormControlLabel,
  Grid,
  makeStyles,
} from '@material-ui/core';
import * as React from 'react';
import { IQuestionProps } from '../../../assignments.interfaces';

const useStyles = makeStyles({
  answerField: {
    marginBottom: 50,
    borderLeft: '0.01em solid',
    padding: 20,
  },
});

const SingleChoiceQuestion: React.FC<IQuestionProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.answerField}>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Radio checked={false} name="checkedB" color="primary" />}
            label="0"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Radio checked={true} name="checkedB" style={{ color: 'red' }} />
            }
            label="1"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={false} name="checkedB" color="primary" />}
            label="3"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Radio
                checked={false}
                name="checkedB"
                color="secondary"
                style={{ color: 'white' }}
              />
            }
            style={{
              color: 'white',
              backgroundColor: '#A1D0A5',
              width: '100%',
              borderRadius: 20,
            }}
            label="2"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleChoiceQuestion;
