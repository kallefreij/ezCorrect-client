import { Grid, Hidden, IconButton, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Button, Card, CardActions, CardContent, createMuiTheme, FormControl, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ToolSidebar from './toolSidebar';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../common/ezTheme';

export interface IInputProps{
    id: string;
    isSelected: boolean;
    handleSelect: (id: any) => void;
}

const useStyles = makeStyles({
    main: {
        marginTop: '100px',
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
        borderStyle: 'solid',
        borderColor:  '#A1D0A5',
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            borderStyle: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
        },
        [theme.breakpoints.up(800)]: {
                width: '800px',
                borderStyle: 'solid',
                borderColor:  '#A1D0A5',
                boxSizing: 'border-box',
                margin: 'auto',
        },
    },
    form: {

    },
    titleField: {
        fontSize: 50,
        width: '100%',
    },
    descriptionField: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
    },
    formControl: {
        minWidth: '95%',
        marginLeft: '5%',
        marginTop: '5px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '20%',
            minWidth: '80%',
        },
    },
    resize: {
        fontSize:40,
    },
});



const HeaderTitleAndDescription: React.FC<IInputProps> = (props) => {

    const classes = useStyles();
    const [age, setAge] = useState<string | number>('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
      console.log(age);
    };
    return (
        <div className={classes.main}>
            <Card className={(props.isSelected ? classes.rootSelect : classes.root)} onClick={() => props.handleSelect(props.id)}>
                <ThemeProvider theme={theme}>
                    <CardContent>
                        <form className={classes.form}>
                            <Grid container>
                                <Grid item sm={8} xs={12}>
                                <TextField  className={classes.titleField} 
                                        label="Titel" 
                                        variant="standard"
                                        InputProps={{
                                            classes: {
                                            input: classes.resize,
                                            },
                                        }}
                                        />
                                </Grid>
                                <Hidden xsDown>
                                    <Grid item sm={4} xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel>Kategori</InputLabel>
                                            <Select value={age}
                                                    onChange={handleChange}
                                                    label="Kategori">
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={8} xs={6}>
                                        <TextField  className={classes.descriptionField} 
                                                id="outlined-basic" 
                                                label="Beskrvning" 
                                                variant="standard"
                                                multiline
                                                rowsMax={4} />
                                    </Grid>
                                    <Grid item sm={4} xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Centralt innehåll</InputLabel>
                                                <Select value={age}
                                                        onChange={handleChange}
                                                        label="Centralt innehåll">
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                        </FormControl> 
                                    </Grid>
                                </Hidden>
                                <Hidden smUp>
                                    <Grid item sm={8} xs={6}>
                                        <TextField  className={classes.descriptionField} 
                                                id="outlined-basic" 
                                                label="Beskrvning" 
                                                variant="standard"
                                                multiline
                                                rows={5} />
                                    </Grid>
                                    <Grid item sm={4} xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel>Kategori</InputLabel>
                                            <Select value={age}
                                                    onChange={handleChange}
                                                    label="Kategori">
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Centralt innehåll</InputLabel>
                                                <Select value={age}
                                                        onChange={handleChange}
                                                        label="Centralt innehåll">
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                        </FormControl> 
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </form>
                    </CardContent>
                    <CardActions>
                    
                    </CardActions>
                </ThemeProvider>
            </Card>
            {props.isSelected ? (<ToolSidebar/>) : null}
        </div>
    );
};

export default HeaderTitleAndDescription;