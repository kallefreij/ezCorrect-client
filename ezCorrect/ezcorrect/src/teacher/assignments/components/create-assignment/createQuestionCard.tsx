import { Card, CardContent, FormControl, Grid, Hidden, IconButton, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import React, { useState } from 'react';
import CardToolbar from './cardToolbar';
import MultiChoiceQuestion from './multiChoiceQuestion/multiCoiceQuestion';
import SingleChoiceQuestion from './singleChoiceQuestion/singleChoiceQuestion';
import TextAnswer from './textAnswer/textAnswer';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../common/ezTheme';



export interface IInputProps{
    id: string;
    index: number;
    questionVal?: string;
    isSelected: boolean;
    qType?: string;
    handleSelect: (id: any) => void;
    setQuestiontype: (id: string, qType: string) => void;
    handleQuestionInput: (id: any, input: string) => void;
}

const useStyles = makeStyles({
    main: {
        marginTop: '15px',
    },
    root: {
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            boxSizing: 'border-box',
            margin: 'auto',
        },
        [theme.breakpoints.up(800)]: {
                width: '800px',
                boxSizing: 'border-box',
                margin: 'auto',
        },
    },
    rootSelect: {
        borderLeft: 'solid',
        borderColor:  '#A1D0A5',
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            borderLeft: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
        },
        [theme.breakpoints.up(800)]: {
                width: '800px',
                borderLeft: 'solid',
                borderColor:  '#A1D0A5',
                boxSizing: 'border-box',
                margin: 'auto',
        },
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

const CreateQuestionCard: React.FC<IInputProps> = (props) => {

    const classes = useStyles();

    const [qType, setQType] = useState(props.qType);

    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setQType(event.target.value);
        props.setQuestiontype(props.id, event.target.value);
        renderSwitch(event.target.value);
    };

    const renderSwitch = (qType?: string) =>{
        switch (qType) {
            case 'textAnswer': 
                return (<TextAnswer id={props.id}/>)
            case 'multiChoiceAnswer': 
                return (<MultiChoiceQuestion id={props.id}/>)
            case 'singleChoceAnswer':
                return (<SingleChoiceQuestion id={props.id}/>)
        }
    }

    const handleQuestionInput = (event: any) => {
        props.handleQuestionInput(props.id, event.target.value);
    }

    return (
        <div className={classes.main}>
            <Card className={(props.isSelected ? classes.rootSelect : classes.root)} onClick={() => props.handleSelect(props.id)}>
                <ThemeProvider theme={theme}>
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <Grid container>
                                <Grid item sm={8} xs={6}>
                                    <TextField className={classes.titleField} value={props.questionVal} label={"Fråga " + props.index} variant="outlined" onInput={handleQuestionInput}/>
                                </Grid>
                                <Hidden xsDown>
                                    <Grid item sm={1} xs={1}>
                                        <IconButton className={classes.iconButton} edge="start" color="inherit" aria-label="menu"> 
                                            <ImageOutlinedIcon className={classes.icon}/>
                                        </IconButton>
                                    </Grid>
                                </Hidden>
                                <Grid item sm={3} xs={6}>
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
                </ThemeProvider>    
            </Card>
            {props.isSelected ? (<CardToolbar cardId={props.id}/>) : null}
        </div>
    );
};

export default CreateQuestionCard;
