import { Checkbox, FormControlLabel, Grid, makeStyles, Radio } from '@material-ui/core';
import * as React from 'react';
import { IQuestionProps } from '../../../assignments.interfaces';

const useStyles = makeStyles({
    answerField:{
        marginBottom: 50,
        borderLeft: '0.01em solid',
        padding: 20
    },
});

const MultiChoiceQuestion:React.FC<IQuestionProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.answerField}>
            <Grid container direction="column">
                <Grid item>
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={true}
                        name="checkedB"
                        color="primary"
                        style={{color:'white'}}
                    />
                    }
                    style={{color:'white', backgroundColor:'#A1D0A5', width: '100%', borderRadius: 20}}
                    label="Långt"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={true}
                        name="checkedB"
                        color="primary"
                        style={{color:'red'}}
                    />
                    }
                    label="Några strån"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={false}
                        name="checkedB"
                        color="primary"
                        style={{color:'white'}}
                    />
                    }
                    style={{color:'white', backgroundColor:'#A1D0A5', width: '100%', borderRadius: 20}}
                    label="Mycket"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={
                    <Checkbox
                        checked={false}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Lite"
                    />
                </Grid>
            </Grid>
        </div>
        
    )
}

export default MultiChoiceQuestion;