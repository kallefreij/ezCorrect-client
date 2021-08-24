import {Input, List, makeStyles} from '@material-ui/core';
import CheckboxInput from './checkboxInput';
import React, { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { IAssignmentState } from '../../../assignments.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setMultiChoiceAlts } from '../../../assignments.actions';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export interface IMultiChoiceAlts{
    id: string;
    alts: IMAlt[];
}
export interface IMAlt{
    id: any;
    value: string;
    isCorrect: boolean;
}

export interface IInputProps{
    id: string;
}

const getMultiChoiceAlts = createSelector<IStateTree, IAssignmentState, IMultiChoiceAlts[]>(
    (state) => state.assignments,
    (a) => a.multiChoiceAlts
)

const MultiCoiceQuestion: React.FC<IInputProps>  = (props) => {
    let tmp_inputs = [
        {id: 1, value: '', isCorrect: false}, 
    ]

    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");
    const [alts, setAlts] = useState(tmp_inputs);
    const altsArray = useSelector(getMultiChoiceAlts);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(altsArray.length !== 0){
            const multiChoiceAlt = altsArray.find(a => a.id === props.id);
            if(multiChoiceAlt){
                setAlts(multiChoiceAlt!.alts);
            }
        }
    })

    const updateReduxState = (alts: IMAlt[]) =>{
        if(altsArray.length !== 0){
            const hasAlts = altsArray.findIndex(a => a.id === props.id);
            if(hasAlts > -1){
                const newMultiChoiceAlts = altsArray.map(sca => {
                    if(sca.id === props.id)
                        sca.alts = alts;
                    return sca; 
                })
                dispatch(setMultiChoiceAlts(newMultiChoiceAlts));
                return;
            }
            const MultiChoiceAlt = {
                id: props.id,
                alts: alts
            }
            altsArray.push(MultiChoiceAlt);
            dispatch(setMultiChoiceAlts([...altsArray]));
            return;
        }
        const MultiChoiceAlt = {
            id: props.id,
            alts: alts
        }
        const multiChoiceAlts = [MultiChoiceAlt];
        dispatch(setMultiChoiceAlts(multiChoiceAlts));
    }

    const deleteInput = (id: any) => {
        const newAlts = alts.filter((item) => item.id !== id);
        setAlts(newAlts);
        updateReduxState(newAlts);
    }
    const addInput = () => {
        setInputValue("");
        let highestNumber = 0;
        alts.forEach((item) => {
            if(item.id > highestNumber){
                highestNumber = item.id;
            }
        }) 
        highestNumber++;
        const newAlts = [...alts, {id: highestNumber, value: '', isCorrect: false}]
        setAlts(newAlts);
        updateReduxState(newAlts);
    }

    const handleCheckbox = (id:any) => {
        alts.forEach((item) => {
            if(item.id === id){
                item.isCorrect = item.isCorrect ? false : true;
            }
        })
        const newAlts = [...alts];
        setAlts(newAlts);
        updateReduxState(newAlts);
    }

    const handleInput = (e: any, id: any) => {
        let val = e.target.value
        alts.forEach((item) => {
            if(item.id === id){
                item.value = val; 
            }
        })
        const newAlts = [...alts];
        setAlts(newAlts);
        updateReduxState(newAlts);
    }

    return (
        <List >
            {
                alts.map(item => <CheckboxInput key={item.id}
                                                id={item.id} 
                                                isCorrect={item.isCorrect} 
                                                inputValue={item.value}
                                                handleCheckbox={handleCheckbox}
                                                handleInput={handleInput}
                                                deleteInput={deleteInput}
                                                />)
            }
            <Input value={inputValue} className={classes.root} onClick={addInput}/>
        </List>
    );
};

export default MultiCoiceQuestion ;