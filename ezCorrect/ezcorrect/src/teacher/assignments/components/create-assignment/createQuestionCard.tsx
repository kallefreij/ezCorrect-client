import { Card, CardActions, CardContent, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import React, { useEffect, useState } from 'react';
import ToolSidebar from './toolSidebar';
import MultiChoiceQuestion from './multiChoiceQuestion/multiCoiceQuestion';
import SingleChoiceQuestion from './singleChoiceQuestion/singleChoiceQuestion';
import TextAnswer from './textAnswer/textAnswer';
import { isBreakStatement } from 'typescript';

const useStyles = makeStyles({
    main: {
        marginTop: '15px',
    },
    root: {
      width: '800px',
      borderStyle: 'solid',
      borderColor:  '#A1D0A5',
      boxSizing: 'border-box',
      margin: 'auto',
    },
    form: {

    },
    titleField: {
        width: '100%',
    },
    formControl: {
        minWidth: '100%',
    },
    icon: {
        fontSize: 'xx-large',
        
    },
    iconButton: {
        marginLeft: '2px',
    }
});

const CreateQuestionCard: React.FC = ({ }) => {

    const classes = useStyles();

    const [qType, setQType] = useState('');
    const [isSelected, setSelected] = useState(true);

    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setQType(event.target.value);
        renderSwitch(event.target.value);
    };

    const handleFocus = () => {

    }

    const renderSwitch = (qType: string) =>{
        switch (qType) {
            case 'textAnswer': 
                return (<TextAnswer/>)
            case 'multiChoiceAnswer': 
                return (<MultiChoiceQuestion/>)
            case 'singleChoceAnswer':
                return (<SingleChoiceQuestion/>)
        }
    }

    return (
        <div className={classes.main}>
            <Card className={classes.root} onClick={handleFocus}>
                <CardContent>
                    <form className={classes.form} noValidate autoComplete="off">
                        <Grid container>
                            <Grid item sm={8}>
                                <TextField className={classes.titleField} id="outlined-basic" label="Fråga" variant="outlined" />
                            </Grid>
                            <Grid item sm={1}>
                                <IconButton className={classes.iconButton} edge="start" color="inherit" aria-label="menu"> 
                                    <ImageOutlinedIcon className={classes.icon}/>
                                </IconButton>
                            </Grid>
                            <Grid item sm={3}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel>Svarstyp</InputLabel>
                                        <Select onChange={handleChange}
                                                label="Svarstyp"
                                                value={qType}>
                                            <MenuItem value={qType}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'textAnswer'}>Fritextsvar</MenuItem>
                                            <MenuItem value={'multiChoiceAnswer'}>Flervalsalternativ</MenuItem>
                                            <MenuItem value={'singleChoceAnswer'}>Enkelvalsalternativ</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>

                    {
                        renderSwitch(qType)
                    }
                    
                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>
            {isSelected ? (<ToolSidebar/>) : null}
        </div>
    );
};

export default CreateQuestionCard;
