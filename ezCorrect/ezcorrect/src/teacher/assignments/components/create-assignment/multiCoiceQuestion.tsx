import { Avatar, Checkbox, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckboxInput from './multiChoiceQuestion/checkboxInput';
import React, { useState } from 'react';

const MultiCoiceQuestion: React.FC  = () => {
    let tmp_inputs = [
        {id: 1, value: '', isSelected: false}, 
    ]

    const [alts, setAlts] = useState(tmp_inputs);
    const deleteInput = (id: any) => {
        const newList = alts.filter((item) => item.id !== id);
        setAlts(newList);
    }
    const addInput = () => {
        let highestNumber = 0;
        alts.forEach((item) => {
            if(item.id > highestNumber){
                highestNumber = item.id;
            }
        }) 
        highestNumber++;
        setAlts([...alts, {id: highestNumber, value: '', isSelected: false}])
    }

    const handleCheckbox = (id:any) => {
        alts.forEach((item) => {
            if(item.id === id){
                item.isSelected = item.isSelected ? false : true;
            }
        })
        setAlts(alts)
    }

    const handleInput = (e: any, id: any) => {
        let val = e.target.value
        alts.forEach((item) => {
            if(item.id === id){
                item.value = val; 
            }
        })
        setAlts(alts);
    }

    return (
        <List >
            {
                alts.map(item => <CheckboxInput id={item.id} isSelected={item.isSelected} inputValue={item.value}/>)
            }
            <Input style={{width: '100%'}} onClick={addInput}/>
        </List>
    );
};

export default MultiCoiceQuestion ;