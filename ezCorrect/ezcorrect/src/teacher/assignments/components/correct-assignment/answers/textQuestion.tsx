import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import { IQuestionProps } from '../../../assignments.interfaces';

const useStyles = makeStyles({
    correctAnswerField:{
        //border: '0.01em solid green',
        borderRadius: 10,
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 50,
        backgroundColor: '#A1D0A5'
    },
    answerText: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 0
    },
    answerTextField: {
        padding: 10,
    },
    title: {
        marginTop: 0
    },
    textAnswerField: {
        borderLeft: '0.01em solid',
        padding: 20
    }
});

const TextQuestion:React.FC<IQuestionProps> = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.textAnswerField}>
            <div className={classes.answerTextField}>
                <h3 className={classes.title}>Pelle svarar:</h3>
                <p className={classes.answerText}>{props.question.answer}</p>
            </div>          
            <div className={classes.correctAnswerField}>
                <h3 className={classes.title}>Rätt svar:</h3>
                <p>{props.question.correctAnswer}</p>
            </div>
        </div>
    )
}

export default TextQuestion;