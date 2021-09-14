import { createStyles, makeStyles, Menu, MenuItem, Theme } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface IProfileMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleSignOut: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    navlink: {
      textDecoration: 'none',
      color: '#f4f6f8',
    },
    menu: {
      '& .MuiPaper-root': {
        backgroundColor: '#A1D0A5',
        padding: '5px',
      },
    },
  })
);

const ProfileMenu: React.FC<IProfileMenuProps> = (props) => {
  const classes = useStyles();

  return (
    <Menu
      id="simple-menu"
      anchorEl={props.anchorEl}
      keepMounted
      className={classes.menu}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      <NavLink to="/teacher/profile" className={classes.navlink}>
        <MenuItem onClick={props.handleClose}>Min profil</MenuItem>
      </NavLink>
      <NavLink to="/home" className={classes.navlink}>
        <MenuItem onClick={props.handleSignOut}>Logga ut</MenuItem>
      </NavLink>
    </Menu>
  );
};

export default ProfileMenu;
