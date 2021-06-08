import { Avatar, Checkbox, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckboxInput from './checkboxInput';
import React, { useState } from 'react';
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
    id: number;
    value: string;
    isSelected: boolean;
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
        {id: 1, value: '', isSelected: false}, 
    ]

    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");
    const [alts, setAlts] = useState(tmp_inputs);
    // const alts = useSelector(getMultiChoiceAlts);
    const dispatch = useDispatch();

    const deleteInput = (id: any) => {
        const newAlts = alts.filter((item) => item.id !== id);
        setAlts(newAlts);
        // dispatch(setMultiChoiceAlts(newAlts));
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
        setAlts([...alts, {id: highestNumber, value: '', isSelected: false}]);
        // dispatch(setMultiChoiceAlts([...alts, {id: highestNumber, value: '', isSelected: false}]))
    }

    const handleCheckbox = (id:any) => {
        alts.forEach((item) => {
            if(item.id === id){
                item.isSelected = item.isSelected ? false : true;
            }
        })
        const newAlts = [...alts];
        setAlts(newAlts);
        // dispatch(setMultiChoiceAlts([...alts]));
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
        // dispatch(setMultiChoiceAlts([...alts]));
    }

    return (
        <List >
            {
                alts.map(item => <CheckboxInput id={item.id} 
                                                isSelected={item.isSelected} 
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