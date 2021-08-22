import { makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { setTextAnswer } from '../../../assignments.actions';
import { IAssignmentState } from '../../../assignments.reducer';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export interface IInputProps{
    id: string;
}

export interface ITextAnswer{
    id: string;
    answer: string;
}

const getTextAnswer = createSelector<IStateTree, IAssignmentState, ITextAnswer[]>(
    (state) => state.assignments,
    (a) => a.textAnswer
)

const TextAnswer: React.FC<IInputProps> = (props) => {
    
    const classes = useStyles();
    const [txtValue, setTxtValue] = useState('');
    const textAnswers = useSelector(getTextAnswer);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(textAnswers)
        if(textAnswers.length !== 0){
            const textAnswer = textAnswers.find(a => a.id === props.id);
            if(textAnswer){
                setTxtValue(textAnswer.answer);
            }
        }
    })

    const updateReduxState = (textAreaValue: string) =>{
        if(textAnswers.length !== 0){
            const hasAnswer = textAnswers.findIndex(a => a.id === props.id);
            if(hasAnswer > -1){
                const newTextAnswers = textAnswers.map(ta => {
                    if(ta.id === props.id)
                        ta.answer = textAreaValue;
                    return ta; 
                })
                dispatch(setTextAnswer(newTextAnswers));
                return;
            }
            const textAnswer = {
                id: props.id,
                answer: textAreaValue
            }
            textAnswers.push(textAnswer);
            dispatch(setTextAnswer([...textAnswers]));
            return;
        }
        const textAnswer = {
            id: props.id,
            answer: textAreaValue
        }
        textAnswers.push(textAnswer);
        dispatch(setTextAnswer([...textAnswers]));
        return;
    }

    const handleInput = (input: any) => {
        setTxtValue(input.target.value);
        updateReduxState(input.target.value);
    }

    return (
        <TextField
          className={classes.root}
          label="Önskat svar:"
          value={txtValue}
          onChange={(e) => handleInput(e)}
          multiline
          rows={4}
        />
    );
};

export default TextAnswer;