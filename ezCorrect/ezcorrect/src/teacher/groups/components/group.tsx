import { Grid } from '@material-ui/core';
import * as React from 'react';
import ActivityBox from './activityBox';
import Calender from './calender';
import Students from './students';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      height: 50,
      [theme.breakpoints.down('sm')]: {
        height: 50,
      },
      [theme.breakpoints.down('xs')]: {
        height: 10,
      },
    },
    margin: {
      margin: 100,
      [theme.breakpoints.down('lg')]: {
        margin: 50,
      },
      [theme.breakpoints.down('xs')]: {
        margin: 10,
      },
    },
    calenderMargin: {
      margin: 100,
      marginTop: 245,
      [theme.breakpoints.down('lg')]: {
        margin: 50,
        marginTop: 200,
      },
      [theme.breakpoints.down('sm')]: {
        margin: 50,
        marginTop: 0,
      },
      [theme.breakpoints.down('xs')]: {
        margin: 10,
        marginTop: 10,
      },
    },
  })
);
const Group: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.top} />
      <Grid container>
        <Grid item sm={12} md={6} lg={4}>
          <div className={classes.margin}>
            <h1>Klass 4B</h1>
            <div>
              <h2>Kommande aktiviteter</h2>
              <Grid container justify="space-between">
                <Grid item>
                  <ActivityBox numberOfTheMonth={20} month="Januari" activity="Glosor" />
                </Grid>
                <Grid item>
                  <ActivityBox numberOfTheMonth={24} month="Januari" activity="Prov" />
                </Grid>
                <Grid item>
                  <ActivityBox numberOfTheMonth={5} month="Februari" activity="Inlämning" />
                </Grid>
              </Grid>
              <Students />
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={8}>
          <div className={classes.calenderMargin}>
            <Calender />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Group;
