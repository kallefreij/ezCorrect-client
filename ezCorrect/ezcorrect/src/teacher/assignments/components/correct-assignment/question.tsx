import { makeStyles, Card, CardActionArea, CardContent, Grid, SvgIcon, darken } from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../redux/rootReducer';
import { setSelectedQuestion } from '../../assignments.actions';
import { IQuestion, IQuestionProps } from '../../assignments.interfaces';
import { IAssignmentState } from '../../assignments.reducer';

const useStyles = makeStyles({
root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    color: 'white',
    cursor: 'pointer',
},
title: {
    marginLeft: 30,
},
text: {
    marginLeft: 30,
    marginTop: -20,
    fontWeight: 'bold'
},
points: {
    marginRight: 30
}
});

const getSelectedQuestionFromState = createSelector<IStateTree, IAssignmentState, IQuestion>(
    (state) => state.assignments,
    (q) => q.selectedQuestion
)





const Question:React.FC<IQuestionProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedQuestion = useSelector(getSelectedQuestionFromState);
    const [color, setColor] = React.useState("#C4C4C4");


    const handleSelected = () => {
        dispatch(setSelectedQuestion(props.question))
    }

    const colorRenderer = (status: number) => {
        switch(props.question.status){
            case status = 1:
                return "#C4C4C4"
            case status = 2:
                return "#D0A1A1"
            case status = 3:
                return "#CFD0A1"
            case status = 4:
                return "#A1D0A5"
            default:
                return "#C4C4C4"
        }
    }

    const renderPoints = () => {
        const points = props.question.points != undefined ? props.question.points : props.question.status == 4 ? 1 : 0;
        return points;
    }

    const renderMaxPoint = () => {
        const maxPoint = props.question.maxPoint != undefined ? props.question.maxPoint : 1;
        return maxPoint;
    }
    
    return(
        <Card className={classes.root} style={{backgroundColor: props.question.id == selectedQuestion.id ? darken(colorRenderer(props.question.status), 0.3) : colorRenderer(props.question.status) }} onClick ={handleSelected}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <h1 className={classes.title}>Fråga {props.question.number}</h1>
                </Grid>
                <Grid item>
                    <h5 className={classes.points}>( {renderPoints()} / {renderMaxPoint()} poäng )</h5>
                </Grid>
            </Grid> 
            <p className={classes.text}>{props.question.question}</p>
        </Card>
    )
}

export default Question;