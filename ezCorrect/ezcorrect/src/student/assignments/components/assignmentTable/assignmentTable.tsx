import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TableButtonMenu from './tableButtonMenu';
import TableBody, { tableData } from './tableBody';
import { IStateTree } from '../../../../redux/rootReducer';
import { IStudentAssignmentState } from '../../student.assignments.reducer';
import { IStudentAssignmentMetaData } from '../../student.assignment.interfaces';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

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

const getAssignmentMetaData = createSelector<IStateTree, IStudentAssignmentState, IStudentAssignmentMetaData[]>(
  (state) => state.studentAssignments,
  (a) => a.assignmentMetadata
);

const transform = (array: IStudentAssignmentMetaData[]): tableData[] => {
  let data: tableData[] = [];
  array.forEach((rowData) => {
    data.push({ id: rowData._id, name: rowData.title, startDate: rowData.startTime, dueDate: rowData.endTime, status: rowData.status });
  });
  return data;
};

function AssignmentTable() {
  const assignmentMetaData = useSelector(getAssignmentMetaData);
  const [data, setData] = useState(transform(assignmentMetaData));

  const setDataFilteredOnStatus = (status: string) => {
    const filteredData: IStudentAssignmentMetaData[] = [];
    assignmentMetaData.forEach((rowData) => {
      if (status === 'all') {
        console.log('hihi');
        filteredData.push(rowData);
      } else if (rowData.status === status) {
        filteredData.push(rowData);
      }
    });
    const newData = transform(filteredData);

    setData(newData);
  };

  useEffect(() => {
    console.log(assignmentMetaData);
  }, []);

  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <TableButtonMenu setFilteredStatus={setDataFilteredOnStatus} />
      <TableBody data={data} />
    </Paper>
  );
}

export default AssignmentTable;
