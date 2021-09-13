import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

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

const NavbarMenu: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.menuButton}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        className={classes.menu}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/teacher/home" className={classes.navlink}>
          <MenuItem onClick={handleClose}>Hem</MenuItem>
        </NavLink>

        <NavLink to="/teacher/assignments" className={classes.navlink}>
          <MenuItem onClick={handleClose}>Uppgifter</MenuItem>
        </NavLink>

        <NavLink to="/teacher/groups" className={classes.navlink}>
          <MenuItem onClick={handleClose}>Klasser</MenuItem>
        </NavLink>

        <NavLink to="/teacher/statistics" className={classes.navlink}>
          <MenuItem onClick={handleClose}>Statistik</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
};

export default NavbarMenu;
