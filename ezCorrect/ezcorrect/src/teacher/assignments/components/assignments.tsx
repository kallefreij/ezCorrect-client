import { createStyles, Grid, Hidden, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AssignmentTable from './assignmentTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssignmentsNow } from '../assignments.actions';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../redux/rootReducer';
import { IAssignmentState } from '../assignments.reducer';
import { IAssignmentMetaData } from '../assignments.interfaces';
import EzCorrectIcon from '../../../common/ezCorrectIcon';

const getAssignmentMetaData = createSelector<IStateTree, IAssignmentState, IAssignmentMetaData[]>(
  (state) => state.assignments,
  (a) => a.assignmentMetadata
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topDiv: {
      height: 100,
      [theme.breakpoints.down('sm')]: {
        height: 0,
      },
    },
  })
);

const Assignments: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const assignmentMetaData = useSelector(getAssignmentMetaData);

  React.useEffect(() => {
    console.log('FETCHING');
    dispatch(fetchAssignmentsNow());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.topDiv} />
      <Hidden smUp>
        <div className="center">
          <EzCorrectIcon height={100} width={100} />
        </div>
      </Hidden>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <div>
            <ButtonCard text="Skapa uppgift" icon={<CreateIcon />} color="#A3A1D0" to="/teacher/assignments/create" />
            <ButtonCard text="Rätta uppgift" icon={<DoneIcon />} color="#A3A1D0" to="/teacher/assignments/correct" />
            <ButtonCard text="Schemalagda uppgifter" icon={<ScheduleIcon />} color="#A3A1D0" to="/teacher/home" />
            <ButtonCard text="Hitta uppgift" icon={<FindInPageIcon />} color="#A3A1D0" to="/teacher/home" />
          </div>
        </Grid>
        <Grid item sm={8} xs={12}>
          <div>{assignmentMetaData !== undefined ? <AssignmentTable data={assignmentMetaData} /> : ''}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Assignments;
