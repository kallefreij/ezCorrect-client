import React, { useEffect, useRef, useState } from 'react';
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
    handleInput: (e: any, id: any) => void;
    handleCheckbox: (id:any) => void;
    deleteInput: (id: any) => void; 
}


const CheckboxInput: React.FC<IInputProps> = (props) => {

    const ref: any = useRef(null);
    const [isSelected, setSelected] = useState(false);
    const changeSelected = () =>{
        let bool = isSelected ? false : true; 
        setSelected(bool);
        props.handleCheckbox(props.id)
    }
    
    useEffect(() => {
        if(ref.current){
            ref.current.focus()
        }
    }, [ref.current])

    return (
        <Input  style={{width: '100%'}}
                ref={ref}
                onChange={(e) => props.handleInput(e, props.id)}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton onClick={() => changeSelected()}>
                            {isSelected ? (<CheckBoxIcon />) : <CheckBoxOutlineBlankIcon />}
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => props.deleteInput(props.id)}>
                          <ClearIcon/>
                      </IconButton>
                    </InputAdornment>
                }
                />
    );
};

export default CheckboxInput;