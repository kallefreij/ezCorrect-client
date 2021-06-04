import { makeStyles, Card, CardActionArea, CardContent, Grid, SvgIcon, darken } from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../redux/rootReducer';
import { setSelectedQuestion } from '../../assignments.actions';
import { IQuestion } from '../../assignments.interfaces';
import { IAssignmentState } from '../../assignments.reducer';

const useStyles = makeStyles({
root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 10,
    color: 'white'
},
title: {
    marginLeft: 30,
},
text: {
    marginLeft: 30,
    marginTop: -20,
    fontWeight: 'bold'
}
});

const getSelectedQuestionFromState = createSelector<IStateTree, IAssignmentState, IQuestion>(
    (state) => state.assignments,
    (q) => q.selectedQuestion
)

interface IQuestionProps{
    color: string;
    question: string;
    number: number;
}

const Question:React.FC<IQuestion> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedQuestion = useSelector(getSelectedQuestionFromState);
    const [selected, setSelected] = React.useState(false);

    const handleSelected = () => {
        setSelected(true);
        dispatch(setSelectedQuestion(props))
    }
    
    return(
        <Card className={classes.root} style={{backgroundColor: props.id == selectedQuestion.id ? darken(props.color, 0.3) : props.color }}>
            <CardActionArea onClick={handleSelected}>
                <h1 className={classes.title}>Fråga {props.number}</h1>
                <p className={classes.text}>{props.question}</p>
            </CardActionArea>           
        </Card>
    )
}

export default Question;