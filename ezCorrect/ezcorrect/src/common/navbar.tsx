import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../common/common.scss';
import { Grid } from '@material-ui/core';
import profilbild from '../resources/profil.jpg';
import { NavLink } from 'react-router-dom';
import { relative } from 'path';

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

    },
    image: {
      height: '45px',
      width: '45px',
      borderRadius: '50%',
    },
    flex: {
      flex: 1,
      [theme.breakpoints.up('sm')]: {
        flex: 0,
      },
    }
  }),
);


const Navbar: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="sticky" className={classes.bar} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            
            <Typography className={classes.button} >
              <NavLink to="/home" style={{textDecoration:'none', color:'white'}}>
                <Button color="inherit">Hem</Button>
              </NavLink>  
            </Typography>
                     
            <Typography className={classes.button}>
              <NavLink to="/tests" style={{textDecoration:'none', color:'white'}}>
                <Button color="inherit">Uppgifter</Button>
              </NavLink>
            </Typography>
            <Typography className={classes.button}>
              <NavLink to="/groups" style={{textDecoration:'none', color:'white'}}>
                <Button color="inherit">Klasser</Button>
              </NavLink>
            </Typography>
            <Typography className={classes.button}>
              <NavLink to="/statistics" style={{textDecoration:'none', color:'white'}}>
                <Button color="inherit">Statistik</Button>
              </NavLink>           
            </Typography>
            <Typography className={classes.flex}></Typography>
            <Typography className={classes.account}>
              <Button color="inherit">Abdullah</Button>
            </Typography>
            <Typography className={classes.account}>
              <img src={profilbild} alt="profilbild" className={classes.image}/>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
    
};

export default Navbar;

