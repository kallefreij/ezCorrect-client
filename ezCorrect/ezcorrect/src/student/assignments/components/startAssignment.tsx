import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import Countdown from 'react-countdown';
import { NavLink } from 'react-router-dom';

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
      marginLeft: 50,
      '&:hover': {
        backgroundColor: '#6fa373',
      },
    },
    startButtonDisabled: {
      backgroundColor: '#c1c1c1',
      height: 250,
      width: 250,
      clipPath: 'polygon(0 0, 0% 100%, 85% 50%);',
      color: '#fff',
      margin: '0 auto',
      marginLeft: 50
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
    const [isAssignmentStartable, setIsAssignmentStartable] = React.useState<boolean>(false);

    const handleStop = () => {
      setIsAssignmentStartable(true)
    }
    return (
        
        <div>
            <div className={classes.topDiv}/>
            <Grid container direction="column" alignItems="center" spacing={8} style={{width: '100%'}}>
                <Grid item>
                  {isAssignmentStartable ? <NavLink to="/student/home" style={{textDecoration: 'none', color: 'black'}}><h1>Starta prov</h1></NavLink> : <h1>Provet börjar om: <Countdown date={Date.now() + 10000} onComplete={handleStop}/></h1>}
                            
                </Grid>
                <Grid item>
                  {
                    isAssignmentStartable ?
                    <NavLink to="/student/home">
                      <div className={classes.startButton}/>
                    </NavLink>
                    :
                    <div className={classes.startButtonDisabled}/>
                  }
                  
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