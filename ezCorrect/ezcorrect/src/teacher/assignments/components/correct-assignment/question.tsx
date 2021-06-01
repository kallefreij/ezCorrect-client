import { makeStyles, Card, CardActionArea, CardContent, Grid, SvgIcon } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 10,
    color: 'white'
},
title: {
    marginLeft: 30,
},
text: {
    marginLeft: 30,
    marginTop: -20,
    fontWeight: 'bold'
}
});

interface IQuestionProps{
    color: string;
    question: string;
    number: number;
}

const Question:React.FC<IQuestionProps> = (props) => {
    const classes = useStyles();
    
    return(
        <Card className={classes.root} style={{backgroundColor: props.color}}>
            <CardActionArea>
                <h1 className={classes.title}>Fråga {props.number}</h1>
                <p className={classes.text}>{props.question}</p>
            </CardActionArea>           
        </Card>
    )
}

export default Question;