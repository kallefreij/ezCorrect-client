import { Grid, IconButton, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Button, Card, CardActions, CardContent, createMuiTheme, FormControl, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ToolSidebar from './toolSidebar';

const useStyles = makeStyles({
    main: {
        marginTop: '100px',
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
        fontSize: 50,
        width: '100%',
    },
    descriptionField: {
        width: '100%'
    },
    formControl: {
        marginLeft: '20%',
        minWidth: '80%',
    },
    resize: {
        fontSize:40,
    },
});



const HeaderTitleAndDescription: React.FC = () => {

    const classes = useStyles();
    const [age, setAge] = useState<string | number>('');
    const [isSelected, setSelected] = useState(true);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
      console.log(age);
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
                    <form className={classes.form}>
                        <Grid container>
                            <Grid item sm={8}>
                            <TextField  className={classes.titleField} 
                                    id="outlined-basic" 
                                    label="Titel" 
                                    variant="standard"
                                    InputProps={{
                                        classes: {
                                        input: classes.resize,
                                        },
                                    }}
                                    />
                            </Grid>
                            <Grid item sm={4}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel>Kategori</InputLabel>
                                    <Select value={age}
                                            onChange={handleChange}
                                            label="Age">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item sm={8}>
                                <TextField  className={classes.descriptionField} 
                                        id="outlined-basic" 
                                        label="Beskrvning" 
                                        variant="standard"
                                        multiline
                                        rowsMax={4} />
                            </Grid>
                            <Grid item sm={4}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel>Centralt innehåll</InputLabel>
                                        <Select value={age}
                                                onChange={handleChange}
                                                label="Age">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                </FormControl> 
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>
            {isSelected ? (<ToolSidebar/>) : null}
        </div>
    );
};

export default HeaderTitleAndDescription;