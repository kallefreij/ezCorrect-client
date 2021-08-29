import React, { useState } from 'react';
import { IconButton, Input, InputAdornment } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { IAssignmentState } from '../../../assignments.reducer';
import { IMultiChoiceAlts } from './multiCoiceQuestion';

export interface IInputProps{
    id: any;
    isCorrect: boolean;
    inputValue: string;
    handleKeyPress: () => void;
    handleInput: (e: any, id: any) => void;
    handleCheckbox: (id:any) => void;
    deleteInput: (id: any) => void; 
}

const getMultiChoiceAlts = createSelector<IStateTree, IAssignmentState, IMultiChoiceAlts[]>(
    (state) => state.assignments,
    (a) => a.multiChoiceAlts
)

const CheckboxInput: React.FC<IInputProps> = (props) => {

    const [isCorrect, setSelected] = useState(false);
    const alts = useSelector(getMultiChoiceAlts);

    const changeSelected = () =>{
        let bool = isCorrect ? false : true; 
        setSelected(bool);
        props.handleCheckbox(props.id)
    }

    const handleKeypress = (event: any) => {
        if(event.key === 'Enter'){
            props.handleKeyPress();
        }
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
                    onKeyPress={e => handleKeypress(e)}
                    onChange={(e) => handleInput(e, props.id)}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton onClick={() => changeSelected()} color="primary">
                                {isCorrect ? (<CheckBoxIcon />) : <CheckBoxOutlineBlankIcon />}
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