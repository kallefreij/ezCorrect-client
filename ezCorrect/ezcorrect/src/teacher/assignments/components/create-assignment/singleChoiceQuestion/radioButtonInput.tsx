import React, { useEffect, useState } from 'react';
import { IconButton, Input, InputAdornment, Radio } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../../common/ezTheme';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { IAssignmentState } from '../../../assignments.reducer';
import { ISingleChoiceAlts } from './singleChoiceQuestion';
import { useSelector } from 'react-redux';


export interface IInputProps{
    buttonId: any;
    altsId: any;
    selectVal: number;
    index: any;
    inputValue: string;
    handleInput: (id: any, e: any) => void;
    deleteInput: (id: any) => void;
    handleRadioButton: (newSelectVal: number) => void;
}

const getSingleChoiceAlts = createSelector<IStateTree, IAssignmentState, ISingleChoiceAlts[]>(
    (state) => state.assignments,
    (a) => a.singleChoiceAlts
)

const RadioButtonInput: React.FC<IInputProps> = (props) => {

    const [value, setValue] = useState(props.inputValue);

    const altsArray = useSelector(getSingleChoiceAlts);

    useEffect(()=>{
        if(altsArray.length !== 0){
            const singelChoiceAlt = altsArray.find(a => a.id === props.altsId);
            if(singelChoiceAlt){
                const alts = singelChoiceAlt!.alts;
                const alt = alts.find(a=> a.id === props.buttonId);
                setValue(alt!.value);
            }
        }
    })

    const handleChange = () => {
        const i = props.index;
        props.handleRadioButton(i);
    };

    return (
        <div>
                { 
                    <ThemeProvider theme={theme}>
                        <Input  style={{width: '100%'}}
                                value={value}
                                autoFocus
                                onChange={(e) => props.handleInput(e, props.buttonId)}
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
                                        <IconButton onClick={() => props.deleteInput(props.buttonId)} color="secondary">
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