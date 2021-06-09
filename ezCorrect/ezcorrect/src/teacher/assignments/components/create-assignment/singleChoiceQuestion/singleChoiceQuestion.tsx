import { Input, List, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../../../redux/rootReducer';
import { setSingleChoiceAlts } from '../../../assignments.actions';
import { IAssignmentState } from '../../../assignments.reducer';
import RadioButtonInput from './radioButtonInput';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export interface ISingleChoiceAlts{
    id: string;
    alts: IAlt[];
}

export interface IAlt{
    id: any; 
    value: string;
}

export interface IInputProps{
    id: string;
}

const getSingleChoiceAlts = createSelector<IStateTree, IAssignmentState, ISingleChoiceAlts[]>(
    (state) => state.assignments,
    (a) => a.singleChoiceAlts
)

const SingleChoiceQuestion: React.FC<IInputProps> = (props) => {
    let tmp_inputs = [
        {id: 1, value: ''}, 
    ]
    const classes = useStyles();
    const [selectVal, setSelectVal] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [alts, setAlts] = useState(tmp_inputs);
    const altsArray = useSelector(getSingleChoiceAlts);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(altsArray.length !== 0){
            const singelChoiceAlt = altsArray.find(a => a.id === props.id);
            if(singelChoiceAlt){
                setAlts(singelChoiceAlt!.alts);
            }
        }
    })

    const updateReduxState = (alts: IAlt[]) =>{
        if(altsArray.length !== 0){
            const hasAlts = altsArray.findIndex(a => a.id === props.id);
            if(hasAlts > -1){
                const newSingleChoiceAlts = altsArray.map(sca => {
                    if(sca.id === props.id)
                        sca.alts = alts;
                    return sca; 
                })
                dispatch(setSingleChoiceAlts(newSingleChoiceAlts));
                return;
            }
            const singleChoiceAlt = {
                id: props.id,
                alts: alts
            }
            altsArray.push(singleChoiceAlt);
            dispatch(setSingleChoiceAlts([...altsArray]));
            return;
        }
        const singleChoiceAlt = {
            id: props.id,
            alts: alts
        }
        const singleChoiceAlts = [singleChoiceAlt];
        dispatch(setSingleChoiceAlts(singleChoiceAlts));
    }

    const addInput = (element: any) => {
        setInputValue("");
        let highestNumber = 0;
        alts.forEach((item) => {
            if(item.id > highestNumber){
                highestNumber = item.id;
            }
        }) 
        highestNumber++;
        const newAlts = [...alts, {id: highestNumber, value: ''}];
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

    const deleteInput = (id: any) => {
        const newAlts = alts.filter((item) => item.id !== id);
        setAlts(newAlts);
        updateReduxState(newAlts);
    }

    const handleRadioButton = (newSelectVal: number) => {
        setSelectVal(newSelectVal);
    }

    return (
        <List >
                {   alts.map((item, i) => <RadioButtonInput buttonId={item.id}
                                                            altsId={props.id}
                                                            inputValue={item.value}
                                                            selectVal={selectVal}
                                                            index={i}
                                                            handleInput={handleInput}
                                                            deleteInput={deleteInput}
                                                            handleRadioButton={handleRadioButton}/>)                                                 
                }
                <Input value={inputValue} className={classes.root} onClick={(e) => addInput(e)} />
        </List>
    );
};

export default SingleChoiceQuestion;