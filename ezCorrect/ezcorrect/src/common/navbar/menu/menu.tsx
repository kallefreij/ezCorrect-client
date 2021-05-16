import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
  }),
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
          <IconButton aria-controls="simple-menu" aria-haspopup="true"  className={classes.menuButton} onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Hem</MenuItem>
            <MenuItem onClick={handleClose}>Uppgifter</MenuItem>
            <MenuItem onClick={handleClose}>Klasser</MenuItem>
            <MenuItem onClick={handleClose}>Statistik</MenuItem>
          </Menu>
        </div>
      );
};

export default NavbarMenu;