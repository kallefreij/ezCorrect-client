import { Card, CardActions, CardContent, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import React, { useState } from 'react';
import ToolSidebar from './toolSidebar';
import MultiChoiceQuestion from './multiCoiceQuestion';

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

const CreateQuestionCard: React.FC = () => {

    const classes = useStyles();

    const [age, setAge] = useState<string | number>('');
    const [isSelected, setSelected] = useState(true);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    const handleFocus = () => {
        if(isSelected){
            setSelected(false);
        }
        else {
            setSelected(true);
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
                                                label="Age">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={0}>Textsvar</MenuItem>
                                            <MenuItem value={1}>Alternativ flera svar</MenuItem>
                                            <MenuItem value={2}>Alternativ ett svar</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>

                    <MultiChoiceQuestion/>

                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>
            {isSelected ? (<ToolSidebar/>) : null}
        </div>
    );
};

export default CreateQuestionCard;
