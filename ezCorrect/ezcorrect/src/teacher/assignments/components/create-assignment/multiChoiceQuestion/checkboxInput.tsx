import React, { useEffect, useRef } from 'react';
import { Avatar, Checkbox, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { render } from '@testing-library/react';

export interface IInputProps{
    id: any;
    isSelected: boolean;
    inputValue: string;
}


const CheckboxInput: React.FC<IInputProps> = (props) => {

    const ref: any = useRef(null);
    useEffect(() => {
        if(ref.current){
            ref.current.focus()
        }
    }, [ref.current])

    const deleteInput = (id: any) => {
        // redux
    }

    const handleCheckbox = (id:any) => {
        // redux
    }

    const handleInput = (e: any, id: any) => {
        // redux
    }
    return (
        <Input  style={{width: '100%'}}
                ref={ref}
                onChange={(e) => handleInput(e, props.id)}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton onClick={() => handleCheckbox(props.id)}>
                            {props.isSelected ? (<CheckBoxIcon />) : <CheckBoxOutlineBlankIcon />}
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => deleteInput(props.id)}>
                          <ClearIcon/>
                      </IconButton>
                    </InputAdornment>
                }
                />
    );
};

export default CheckboxInput;