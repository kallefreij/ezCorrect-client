import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute'
      },
    },
    menuButton: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    bar:{
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      backgroundColor: '#A1D0A5',
      [theme.breakpoints.up(775)]: {
        marginLeft: '5%',
        width: '650px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: '#A1D0A5',
      },
    },
    button: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        borderRight: '0.2em solid',
        borderColor: '#f4f6f8',
        padding: '0.5em',
        paddingTop: '0.05em',
        paddingBottom: '0.05em',
        display: 'block',
      },
    },
    account: {
      paddingRight: '15px',
    },
    flex: {
      flex: 1,
      [theme.breakpoints.up('sm')]: {
        flex: 0,
      },
    }
  }),
);

const SignInNavbar: React.FC = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.bar} >
                <Toolbar>
                    <Typography className={classes.button}>
                        <NavLink to="/signin" style={{textDecoration:'none', color:'white'}}>
                            <Button color="inherit">Logga in</Button>
                        </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SignInNavbar;