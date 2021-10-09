import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topDiv: {
      height: 100,
      [theme.breakpoints.down('sm')]: {
        height: 0,
      },
    },
    startButton: {
      backgroundColor: '#A1D0A5',
      height: 250,
      width: 250,
      clipPath: 'polygon(0 0, 0% 100%, 85% 50%);',
      color: '#fff',
      margin: '0 auto',
      cursor: 'pointer',
      marginLeft: 50,
      '&:hover': {
        backgroundColor: '#6fa373',
      },
    },
    infoDiv: {
        border: 'solid red',
        borderWidth: 1,
        padding: 50,
        width: 500,
        borderRadius: 20
    }
  }),
);

const StartAssignment:React.FC = () => {
    const classes = useStyles();

    return (
        
        <div>
            <div className={classes.topDiv}/>
            <Grid container direction="column" alignItems="center" spacing={8}>
                <Grid item>
                    <h1>Provet börjar om 30 min</h1>
                </Grid>
                <Grid item>
                    <div className={classes.startButton}/>
                </Grid>
                <Grid item>
                    <div className={classes.infoDiv}>
                        <h3>Ämne: Matematik</h3>
                        <h3>Frågor: 30</h3>
                        <h3>Tid: 1:30h</h3>
                        <h3>Hjälpmedel: Miniräknare, formelblad</h3>                  
                    </div>
                </Grid>
            </Grid>
            
            
            
        </div>  
    )
}

export default StartAssignment;