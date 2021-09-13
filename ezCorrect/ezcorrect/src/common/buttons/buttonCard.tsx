import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  SvgIcon,
  createStyles,
  Theme,
} from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      margin: 'auto',
      marginTop: 20,
      borderRadius: 10,
      color: 'white',
      backgroundColor: '#ffffff',
      //border: '0.1em solid #225a26',
      [theme.breakpoints.down('sm')]: {
        fontSize: 10,
        height: 50,
        marginTop: 10,
        //width: '90%',
        //width: 100,
        display: 'flex',
      },
    },
    icon: {
      fontSize: 40,
      marginTop: 24,
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        marginTop: -5,
      },
    },
    text: {
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        marginTop: -5,
      },
    },
  })
);

export interface IButtonCardProps {
  text: string;
  icon: any;
  color: string;
  to: string;
}

const ButtonCard: React.FC<IButtonCardProps> = (props) => {
  const classes = useStyles();

  return (
    <NavLink to={props.to} style={{ textDecoration: 'none' }}>
      <Card className={classes.root} style={{ backgroundColor: props.color }}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item>
                <SvgIcon className={classes.icon}>{props.icon}</SvgIcon>
              </Grid>
              <Grid item>
                <h1 className={classes.text}>{props.text}</h1>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

export default ButtonCard;
