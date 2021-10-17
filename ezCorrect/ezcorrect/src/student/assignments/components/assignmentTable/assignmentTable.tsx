import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import TableButtonMenu from './tableButtonMenu';
import TableBody from './tableBody';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    margin: 'auto',
    width: '75%',
    height: '900px',
    borderRadius: '15px',
    backgroundColor: '#FBF5F3',
    padding: '0px',
  },
}));

const AssignmentTable: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <TableButtonMenu />
      <TableBody />
    </Paper>
  );
};

export default AssignmentTable;
