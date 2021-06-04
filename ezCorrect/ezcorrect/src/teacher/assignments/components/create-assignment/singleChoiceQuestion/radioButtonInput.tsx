import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Checkbox, FormControlLabel, Grid, IconButton, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, Radio, RadioGroup, RadioProps, TextField, withStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { render } from '@testing-library/react';
import classes from '*.module.css';
import { green, purple } from '@material-ui/core/colors';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';

export interface IInputProps{
    id: any;
    selectVal: number;
    index: any;
    handleInput: (id: any, e: any) => void;
    deleteInput: (id: any) => void;
    handleRadioButton: (newSelectVal: number) => void;
}

const RadioButtonInput: React.FC<IInputProps> = (props) => {

    const handleChange = () => {
        const i = props.index;
        props.handleRadioButton(i);
    };

    return (
        <div>
                { 
                    <ThemeProvider theme={theme}>
                        <Input  style={{width: '100%'}}
                                autoFocus
                                onChange={(e) => props.handleInput(props.id, e)}
                                startAdornment={
                                    <InputAdornment position="start">
                                            <Radio  checked={props.selectVal === props.index}
                                                    color="primary"
                                                    onChange={handleChange}
                                                    value={props.index}
                                                    inputProps={{ 'aria-label': 'A' }}/>
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
                }
        </div>
    );
};

export default RadioButtonInput;