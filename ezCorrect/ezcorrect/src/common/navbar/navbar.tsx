import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../common/common.scss';
import { Grid, Menu, Slide } from '@material-ui/core';
import profilbild from '../../resources/profil.jpg';
import NavbarMenu from './menu/menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
              <NavbarMenu/>
              <Typography className={classes.button}>
                <Button color="inherit">Hem</Button>
              </Typography>
              <Typography className={classes.button}>
                <Button color="inherit">Uppgifter</Button>
              </Typography>
              <Typography className={classes.button}>
                <Button color="inherit">Klasser</Button>
              </Typography>
              <Typography className={classes.button}>
                <Button color="inherit">statistik</Button>
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

