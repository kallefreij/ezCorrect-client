import { makeStyles, Card, Grid } from '@material-ui/core';
import * as React from 'react';

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

const CorrectionBox:React.FC = () => {
    const classes = useStyles();
    
    return(
        <Card className={classes.root}>
            <h2 className={classes.text}>Fråga 4</h2>
            <h3 className={classes.text}>1 * 500?</h3>
            <Grid container>
                <Grid item xs={6}>
                    <Card className={classes.testCard}>
                        <h3>Elev svar</h3>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.testCard}>
                        <h3>Rätt svar</h3>
                    </Card>
                </Grid>
                <Grid xs={12}>
                    <Card className={classes.comment}>
                        <h3>Kommentar</h3>
                    </Card>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CorrectionBox;