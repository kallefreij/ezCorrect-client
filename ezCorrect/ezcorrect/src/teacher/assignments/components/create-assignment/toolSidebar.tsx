import { Button, Card, CardActions, CardContent, Grid, IconButton, makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputIcon from '@material-ui/icons/Input';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TitleIcon from '@material-ui/icons/Title';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../common/ezTheme';

const useStyles = makeStyles({
    root: {
        height: '55px',
        borderStyle: 'solid',
        borderColor:  '#A1D0A5',
        boxSizing: 'border-box',
        margin: 'auto',
        marginTop: '5px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            height: '55px',
            width: '100%',
            borderStyle: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
            marginTop: '5px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
        [theme.breakpoints.up(800)]: {
            height: '55px',
            width: '800px',
            borderStyle: 'solid',
            borderColor:  '#A1D0A5',
            boxSizing: 'border-box',
            margin: 'auto',
            marginTop: '5px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        },
    },
    cardActions: {
    },
    iconButton: {
        
    },
    icon: {
        fontSize: 'xx-large',
    }
})


const ToolSidebar: React.FC = () => {

    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root}>
                <CardActions>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <AddCircleOutlineIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <InputIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <VideoLibraryIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <TitleIcon/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.iconButton}>
                                <MoreHorizIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
};

export default ToolSidebar;