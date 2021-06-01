import { makeStyles, Theme, createStyles, Grid, Card } from '@material-ui/core';
import * as React from 'react';
import CorrectionBox from './correctionBox';
import Header from './header';
import Question from './question';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        top: {
            height: 100,
            [theme.breakpoints.down('sm')]: {
                height: 50,
            },
            [theme.breakpoints.down('xs')]: {
                height: 10,
            },
        },
        margin: {
            marginTop: 50,
            marginLeft: 100,
            marginRight: 100,
            [theme.breakpoints.down('lg')]: {
                margin: 50,
            },
            [theme.breakpoints.down('xs')]: {
                margin: 10,
            },
        },
        questionBox: {
            maxHeight: '80vh',
            overflow: 'auto',
            //overflowY: 'scroll'
        }
    }),
);

const CorrectAssignment:React.FC = () => {
    const classes = useStyles();
    const questions = [
        {question: "Hur mycket hår har Roger?", number: 1, color: "#D0A1A1"},
        {question: "Vem vann minigolfen?", number: 2, color: "#A1D0A5"},
        {question: "1 + 1?", number: 3, color: "#D0A1A1"},
        {question: "Vem vill bli miljonär?", number: 4, color: "#A1D0A5"},
        {question: "Vad heter Karlsson på taket i förnamn?", number: 5, color: "#A1D0A5"},
        {question: "Vem var Sveriges först president?", number: 6, color: "#A1D0A5"},
        {question: "1 * 500?", number: 7, color: "#A1D0A5"},
        {question: "Hur mycket hår har Roger?", number: 8, color: "#D0A1A1"},
        {question: "Vem vann minigolfen?", number: 9, color: "#A1D0A5"},
        {question: "1 + 1?", number: 10, color: "#D0A1A1"},
        {question: "Vem vill bli miljonär?", number: 11, color: "#A1D0A5"},
        {question: "Vad heter Karlsson på taket i förnamn?", number: 12, color: "#A1D0A5"},
        {question: "Vem var Sveriges först president?", number: 13, color: "#A1D0A5"},
        {question: "1 * 500?", number: 14, color: "#A1D0A5"},
    ]
    return (
        <div>
            <div className={classes.top}/>
            <div className={classes.margin}>
                <Grid container>
                    <Grid item sm={9}>
                        <Header/>
                        <CorrectionBox/>
                    </Grid>
                    <Grid item sm={3}>
                        <div className={classes.questionBox}>
                            {questions.map((x, i) => <Question key={i} question={x.question} number={x.number} color={x.color}/>)}
                        </div>                     
                    </Grid>
                </Grid>
            </div>         
        </div>
    )
}

export default CorrectAssignment;