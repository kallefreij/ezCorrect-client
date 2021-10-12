import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AssignmentTable from './components/assignmentTable/assignmentTable';
import { fetchStudentAssignmentsMetaData } from './student.assignments.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#F1E6E1',
  },
}));



const Assignments: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    console.log('FETCHING');
    dispatch(fetchStudentAssignmentsMetaData('teststudent'));
  }, [dispatch]);
  
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={8} xs={12}>
          <AssignmentTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Assignments;
