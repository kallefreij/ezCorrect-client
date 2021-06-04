import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Checkbox, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';

export interface IInputProps{
    id: any;
    isSelected: boolean;
    inputValue: string;
    handleInput: (e: any, id: any) => void;
    handleCheckbox: (id:any) => void;
    deleteInput: (id: any) => void; 
}


const CheckboxInput: React.FC<IInputProps> = (props) => {

    const [isSelected, setSelected] = useState(false);
    const changeSelected = () =>{
        let bool = isSelected ? false : true; 
        setSelected(bool);
        props.handleCheckbox(props.id)
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Input  style={{width: '100%'}}
                    autoFocus
                    onChange={(e) => props.handleInput(e, props.id)}
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