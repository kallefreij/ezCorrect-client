import { Card, Grid, IconButton, makeStyles } from '@material-ui/core';
import * as React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
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

const useStyles = makeStyles({
    testCard: {
        height: 300,
        backgroundColor: '#C4C4C4',
        margin: 20,
        padding: 20,
        position: 'relative'
    },
    actionBar: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 50,
    },
    icon:{
        fontSize: 35
    }
});
const getSelectedQuestionFromState = createSelector<IStateTree, IAssignmentState, IQuestion>(
    (state) => state.assignments,
    (q) => q.selectedQuestion
)
const getQuestionsFromState = createSelector<IStateTree, IAssignmentState, IQuestion[]>(
    (state) => state.assignments,
    (q) => q.questions
)

const Answers:React.FC = () => {
    const classes = useStyles();
    const selectedQuestion = useSelector(getSelectedQuestionFromState);
    const questions = useSelector(getQuestionsFromState);
    const dispatch = useDispatch();

    const setAnswerStatus = (status: number) => {
        const index = questions.indexOf(selectedQuestion);
        const newQuestions = [...questions];
        selectedQuestion.status = status;
        newQuestions.splice(index, 1, selectedQuestion);     
        dispatch(updateQuestion(selectedQuestion, newQuestions));
    }

    const renderQuestionType = (questionType: string) => {
        switch(questionType){
            case questionType = "flerval":
                return <MultiChoiceQuestion question={selectedQuestion}/>
            case questionType = "text":
                return <TextQuestion question={selectedQuestion}/>
            case questionType = "ettval":
                return <SingleChoiceQuestion question={selectedQuestion}/>
            default:
                return "def"
        }
    }
    return(
        <Card className={classes.testCard}>
            <h1>{renderQuestionType(selectedQuestion.questionType)}</h1>
            <div className={classes.actionBar}>
                <Grid container justify="space-between" alignItems="center" style={{height: 50}}>
                    <Grid item>
                        <IconButton size="small">
                        <ChatBubbleOutlineIcon className={classes.icon}/>
                    </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton size="small" onClick={() => setAnswerStatus(3)}>
                        <CheckIcon className={classes.icon}/>
                        </IconButton>
                        <IconButton size="small" onClick={() => setAnswerStatus(2)}>
                            <CloseIcon className={classes.icon}/>
                        </IconButton>  
                    </Grid>
                </Grid>                          
            </div>
        </Card>
    )
}

export default Answers;