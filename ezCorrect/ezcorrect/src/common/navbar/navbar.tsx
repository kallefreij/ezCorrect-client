import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../common.scss';
import { NavLink, useHistory } from 'react-router-dom';
import NavbarMenu from './menu/menu';
import UserAvatar from '../avatar/userAvatar';
import ProfileMenu from './menu/profileMenu';
import { Auth } from 'aws-amplify';
import { createSelector } from 'reselect';
import { IStateTree } from '../../redux/rootReducer';
import { IUserState, IUser } from '../user/user.reducer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
      },
    },
    menuButton: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    bar: {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      backgroundColor: '#A1D0A5',
      [theme.breakpoints.up(775)]: {
        marginLeft: '5%',
        width: 'auto',
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
    },
  })
);

export interface INavbarProps {
  onSignOut: () => void;
}

export interface INavModules{
  path:string;
  name:string;
}

const getUserData = createSelector<IStateTree, IUserState, IUser>(
  (state) => state.user,
  (a) => a.loggedInUser
);

const Navbar: React.FC<INavbarProps> = (props) => {
  const classes = useStyles();
  const userData = useSelector(getUserData);
  const [anchorElProfileMenu, setAnchorElProfileMenu] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const [modules, setModules] = useState<INavModules[]>([]);
  
  const teacherModules:INavModules[] = [{path: '/teacher/home', name: 'Hem'}, {path: '/teacher/assignments', name: 'Uppgifter'}, {path: '/teacher/groups', name: 'Klasser'}, {path: '/teacher/statistics', name: 'Statistik'}];
  const studentModules:INavModules[] = [{path: '/student/home', name: 'Hem'}, {path: '/student/assignments', name: 'Uppgifter'}];
  

  const handleClickProfileButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfileMenu(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfileMenu(null);
  };

  const onSignOut = async () => {
    try {
      await Auth.signOut();
      props.onSignOut();
      history.replace('/home');
    } catch (error) {
      console.log('Error logging out', error);
    }
  }

  const setNavModules = () => {
    switch (userData.roles[0]) {
      case 'Teacher':
        setModules(teacherModules)
        break;
      case 'Student':
        setModules(studentModules)
        break;
      default:
    }
  }

  useEffect(() => {
    setNavModules()
  }, [userData]);

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.bar}>
        <Toolbar>
          <NavbarMenu />
          {
            modules.map(x => 
                <Typography className={classes.button}>
                  <NavLink to={x.path} style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">{x.name}</Button>
                  </NavLink>
                </Typography>
            )
          }
          <Typography>
            <Button color="inherit" onClick={handleClickProfileButton}>
              {userData.firstName}
            </Button>
          </Typography>
          <div style={{marginRight: 20}}>
            <UserAvatar firstName="Test" lastName="Lärare" size={45} image="https://www.fillmurray.com/g/200/300" />
          </div>
          <ProfileMenu
            handleClose={handleCloseProfileMenu}
            handleSignOut={onSignOut}
            anchorEl={anchorElProfileMenu}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
