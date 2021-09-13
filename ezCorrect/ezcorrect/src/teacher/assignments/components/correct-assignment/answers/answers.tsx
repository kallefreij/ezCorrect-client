import { Grid, IconButton, makeStyles } from '@material-ui/core';
import * as React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { IQuestion } from '../../../assignments.interfaces';
import { IAssignmentState } from '../../../assignments.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../../assignments.actions';
import MultiChoiceQuestion from './multiChoiceQuestion';
import TextQuestion from './textQuestion';
import SingleChoiceQuestion from './singleChoiceQuestion';
import { green, red } from '@material-ui/core/colors';
import PointSelectionMenu from './pointSelectionMenu';

const useStyles = makeStyles({
  testCard: {
    //minHeight: 300, Kanske borde ha? Fundera på det
    backgroundColor: '#F1F1F1',
    margin: 20,
    padding: 20,
    position: 'relative',
  },
  actionBar: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
  },
  icon: {
    fontSize: 35,
  },
  border: {
    borderTop: '0.01em solid',
  },
});
const getSelectedQuestionFromState = createSelector<
  IStateTree,
  IAssignmentState,
  IQuestion
>(
  (state) => state.assignments,
  (q) => q.selectedQuestion
);
const getQuestionsFromState = createSelector<
  IStateTree,
  IAssignmentState,
  IQuestion[]
>(
  (state) => state.assignments,
  (q) => q.questions
);

const Answers: React.FC = () => {
  const classes = useStyles();
  const selectedQuestion = useSelector(getSelectedQuestionFromState);
  const questions = useSelector(getQuestionsFromState);
  const dispatch = useDispatch();
  const [pointMenuOpen, setPointMenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const setAnswerStatus = (status: number, points?: number) => {
    const newQuestions = [...questions];
    let index = newQuestions.indexOf(selectedQuestion);
    if (index === -1) index = 0; //Mega ful lösning, av någon blir index -1 när frågorna renderas första gången, om man inte byter fråga. TODO undersök närmare
    selectedQuestion.status = status;
    selectedQuestion.points = points;
    newQuestions.splice(index, 1, selectedQuestion);
    dispatch(updateQuestion(selectedQuestion, newQuestions));
  };

  const handlePointMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedQuestion.maxPoint !== undefined) {
      setPointMenuOpen(true);
      setAnchorEl(event.currentTarget);
    } else {
      setAnswerStatus(4);
    }
  };

  const renderQuestionType = (questionType: string) => {
    switch (questionType) {
      case (questionType = 'flerval'):
        return <MultiChoiceQuestion question={selectedQuestion} />;
      case (questionType = 'text'):
        return <TextQuestion question={selectedQuestion} />;
      case (questionType = 'ettval'):
        return <SingleChoiceQuestion question={selectedQuestion} />;
      default:
        return 'def';
    }
  };
  return (
    <div className={classes.testCard}>
      <div style={{ position: 'relative' }}>
        {renderQuestionType(selectedQuestion.questionType)}
      </div>
      <div className={classes.actionBar}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ height: 50 }}
        >
          <Grid item>
            {/* <IconButton size="small">
                            <ChatBubbleOutlineIcon className={classes.icon}/>
                        </IconButton> */}
          </Grid>
          <Grid item>
            <IconButton size="small" onClick={handlePointMenuClick}>
              <CheckIcon
                className={classes.icon}
                style={{ color: green[800] }}
              />
            </IconButton>
            <PointSelectionMenu
              id={selectedQuestion.id}
              open={pointMenuOpen}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              setOpen={setPointMenuOpen}
              points={selectedQuestion.points}
              maxPoint={selectedQuestion.maxPoint}
              setStatus={setAnswerStatus}
            />
            <IconButton
              size="small"
              onClick={() => setAnswerStatus(2)}
              style={{ color: red[800] }}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Answers;
