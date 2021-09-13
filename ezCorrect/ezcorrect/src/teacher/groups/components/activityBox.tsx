import { Card, CardContent } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 150,
      height: 150,
      [theme.breakpoints.down('lg')]: {
        width: 100,
        height: 100,
      },
    },
    text: {
      margin: 0,
      fontSize: 15,
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: 10,
        fontWeight: 'bold',
      },
    },
    number: {
      fontSize: 30,
      margin: 0,
      fontWeight: 'bold',
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: 20,
      },
    },
  })
);

interface IActivityBoxProps {
  numberOfTheMonth: number;
  month: string;
  activity: string;
}

const ActivityBox: React.FC<IActivityBoxProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <p className={classes.text}>{props.month}</p>
        <p className={classes.number}>{props.numberOfTheMonth}</p>
        <p className={classes.text}>{props.activity}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityBox;
