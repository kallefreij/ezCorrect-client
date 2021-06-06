import { makeStyles, Card, Grid } from '@material-ui/core';
import * as React from 'react';
import { IQuestion } from '../../assignments.interfaces';
import Answers from './answers/answers';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        padding: 30
    },
    text: {
        margin: 0
    },
    testCard: {
        height: 300,
        backgroundColor: '#C4C4C4',
        margin: 20,
        padding: 20
    },
    comment: {
        height: 200,
        backgroundColor: '#C4C4C4',
        margin: 20,
        padding: 20
    }
});

interface ICorrectionBox{
    question: IQuestion
}

const CorrectionBox:React.FC<ICorrectionBox> = (props) => {
    const classes = useStyles();

    const renderPoints = () => {
        const points = props.question.points != undefined ? props.question.points : props.question.status == 4 ? 1 : 0;
        return points;
    }

    const renderMaxPoint = () => {
        const maxPoint = props.question.maxPoint != undefined ? props.question.maxPoint : 1;
        return maxPoint;
    }
    
    return(
        <Card className={classes.root}>
           
            <Grid container>
                <Grid item xs={4}>
                    <div style={{float:'left'}}>
                        <h2 className={classes.text}>Fråga {props.question.number}</h2>
                        <h5 className={classes.text}>( {renderPoints()} / {renderMaxPoint()} poäng )</h5>
                    </div>
                    <div style={{marginLeft: 120}}>
                        <h3 className={classes.text}>{props.question.question}</h3>
                    </div>
                    
                </Grid>
                <Grid item xs={8}>
                    <Answers/>
                </Grid>
                {/* <Grid item xs={6}>
                    <Card className={classes.testCard}>
                        <h3>{props.question.correctAnswer}</h3>
                    </Card>
                </Grid> */}
                {/* <Grid xs={12}>
                    <Card className={classes.comment}>
                        <h3>Kommentar</h3>
                    </Card>
                </Grid> */}
            </Grid>
        </Card>
    )
}

export default CorrectionBox;