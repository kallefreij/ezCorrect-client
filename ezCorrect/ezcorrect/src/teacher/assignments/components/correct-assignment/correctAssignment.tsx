import { makeStyles, Theme, createStyles, Grid} from '@material-ui/core';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../redux/rootReducer';
import { IQuestion } from '../../assignments.interfaces';
import { IAssignmentState } from '../../assignments.reducer';
import CorrectionBox from './correctionBox';
import Header from './header';
import Question from './question';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      height: 100,
      [theme.breakpoints.down('sm')]: {
        height: 50,
      },
      [theme.breakpoints.down('xs')]: {
        height: 10,
      },
    },
    margin: {
      marginTop: 50,
      marginLeft: 100,
      marginRight: 100,
      [theme.breakpoints.down('lg')]: {
        margin: 50,
      },
      [theme.breakpoints.down('xs')]: {
        margin: 10,
      },
    },
    questionBox: {
      maxHeight: '80vh',
      overflow: 'auto',
      //overflowY: 'scroll'
    },
  })
);

const getQuestionsFromState = createSelector<
  IStateTree,
  IAssignmentState,
  IQuestion[]
>(
  (state) => state.assignments,
  (q) => q.questions
);

const getSelectedQuestionFromState = createSelector<
  IStateTree,
  IAssignmentState,
  IQuestion
>(
  (state) => state.assignments,
  (q) => q.selectedQuestion
);

const CorrectAssignment: React.FC = () => {
  const classes = useStyles();

  const questions = useSelector(getQuestionsFromState);
  const selectedQuestion = useSelector(getSelectedQuestionFromState);

  return (
    <div>
      <div className={classes.top} />
      <div className={classes.margin}>
        <Grid container>
          <Grid item sm={9}>
            <Header />
            <CorrectionBox question={selectedQuestion} />
          </Grid>
          <Grid item sm={3}>
            <div className={classes.questionBox}>
              {questions.map((q, i) => (
                <Question key={i} question={q} />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CorrectAssignment;
