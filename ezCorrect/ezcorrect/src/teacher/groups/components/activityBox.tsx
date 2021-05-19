import classes from '*.module.css';
import { Card, CardContent, Typography, CardActions, Button, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
    root: {
      width: 200,
      height: 200,
    },
    text: {
      margin: 0,
      textAlign: 'center'
    },
    number: {
        fontSize: 60,
        margin: 0,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pos: {
      marginBottom: 12,
    },
  });

interface IActivityBoxProps{
    numberOfTheMonth: number;
    month: string;
    activity: string;
}

const ActivityBox:React.FC<IActivityBoxProps> = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <p className={classes.text}>{props.month}</p>
                <p className={classes.number}>{props.numberOfTheMonth}</p>
                <p className={classes.text}>{props.activity}</p>
            </CardContent>
        </Card>
    )
}

export default ActivityBox;