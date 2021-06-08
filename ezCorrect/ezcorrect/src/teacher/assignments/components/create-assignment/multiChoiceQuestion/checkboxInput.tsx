import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Checkbox, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { IAssignmentState } from '../../../assignments.reducer';
import { IMultiChoiceAlts } from './multiCoiceQuestion';

export interface IInputProps{
    id: any;
    isSelected: boolean;
    inputValue: string;
    handleInput: (e: any, id: any) => void;
    handleCheckbox: (id:any) => void;
    deleteInput: (id: any) => void; 
}

const getMultiChoiceAlts = createSelector<IStateTree, IAssignmentState, IMultiChoiceAlts[]>(
    (state) => state.assignments,
    (a) => a.multiChoiceAlts
)

const CheckboxInput: React.FC<IInputProps> = (props) => {

    const [isSelected, setSelected] = useState(false);
    const alts = useSelector(getMultiChoiceAlts);

    const changeSelected = () =>{
        let bool = isSelected ? false : true; 
        setSelected(bool);
        props.handleCheckbox(props.id)
    }

    const handleInput = (e:any, id:any) =>{
        props.handleInput(e,id);
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Input  style={{width: '100%'}}
                    // value={alts.find(a => a.id === props.id)?.value}
                    value={props.inputValue}
                    autoFocus
                    onChange={(e) => handleInput(e, props.id)}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton onClick={() => changeSelected()} color="primary">
                                {isSelected ? (<CheckBoxIcon />) : <CheckBoxOutlineBlankIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={() => props.deleteInput(props.id)} color="secondary">
                                <ClearIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                    />
        </ThemeProvider>
    );
};

export default CheckboxInput;