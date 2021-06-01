import { Input, List, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import RadioButtonInput from './radioButtonInput';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const SingleChoiceQuestion: React.FC = () => {

    let tmp_inputs = [
        {id: 1, txtVal: ''}, 
    ]

    const classes = useStyles();
    const [alts, setAlts] = useState(tmp_inputs);
    const [selectVal, setSelectVal] = useState(0);

    const addInput = () => {
        let highestNumber = 0;
        alts.forEach((item) => {
            if(item.id > highestNumber){
                highestNumber = item.id;
            }
        }) 
        highestNumber++;
        setAlts([...alts, {id: highestNumber, txtVal: ''}]);
    }

    const handleInput = (id: any, e: any) => {
        let val = e.target.value
        alts.forEach((item) => {
            if(item.id === id){
                item.txtVal = val; 
            }
        })
        setAlts(alts);
        console.log(alts);
    }

    const deleteInput = (id: any) => {
        const newList = alts.filter((item) => item.id !== id);
        setAlts(newList);
    }

    const handleRadioButton = (newSelectVal: number) => {
        setSelectVal(newSelectVal);
    }

    return (
            <List >
                    {
                        alts.map((item, i, a) => <RadioButtonInput  id={item.id}
                                                                    selectVal={selectVal}
                                                                    index={i}
                                                                    txtValue={item.txtVal}
                                                                    handleInput={handleInput}
                                                                    deleteInput={deleteInput}
                                                                    handleRadioButton={handleRadioButton}/>)
                    }
                    <Input className={classes.root} onClick={addInput}/>
            </List>
    );
};

export default SingleChoiceQuestion;