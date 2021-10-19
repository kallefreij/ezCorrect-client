import { Button, ButtonGroup, createStyles, Grid, Hidden, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AssignmentTable from './assignmentTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssignmentsNow, fetchScheduledAssignmentsNow } from '../assignments.actions';
import { createSelector } from 'reselect';
import { IStateTree } from '../../../redux/rootReducer';
import { IAssignmentState } from '../assignments.reducer';
import { IAssignmentMetaData, IScheduledAssignment } from '../assignments.interfaces';
import EzCorrectIcon from '../../../common/ezCorrectIcon';
import { IUserState, IUser } from '../../../common/user/user.reducer';
import ScheduledAssignmentTable from './scheduledAssignmentTable';

const getAssignmentMetaData = createSelector<IStateTree, IAssignmentState, IAssignmentMetaData[]>(
  (state) => state.assignments,
  (a) => a.assignmentMetadata
);
const getScheduledAssignmentMetaData = createSelector<IStateTree, IAssignmentState, IScheduledAssignment[]>(
  (state) => state.assignments,
  (a) => a.scheduledAssignments
);
const getUserData = createSelector<IStateTree, IUserState, IUser>(
  (state) => state.user,
  (a) => a.loggedInUser
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topDiv: {
      height: 100,
      [theme.breakpoints.down('sm')]: {
        height: 0,
      },
    },
    activeButton: {
      backgroundColor: '#A3A1D0',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#A3A1D0',
      },
    },
    notActiveButton: {
      backgroundColor: '#b1b1b1',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#b1b1b1',
      },
    },
  })
);

const Assignments: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userData = useSelector(getUserData);
  const assignmentMetaData = useSelector(getAssignmentMetaData);
  const scheduledassignmentMetaData = useSelector(getScheduledAssignmentMetaData);
  const [assignmentTableHidden, setAssignmentTableHidden] = React.useState<boolean>(false);
  const [scheduledAssignmentTableHidden, setScheduledAssignmentTableHidden] = React.useState<boolean>(true);

  React.useEffect(() => {
    console.log('FETCHING');
    dispatch(fetchAssignmentsNow(userData.username));
    dispatch(fetchScheduledAssignmentsNow(userData.username));
  }, [dispatch]);

  const handleAssignmentTableButtonClickClick = () => {
    if (!assignmentTableHidden) {
      return;
    } else {
      setAssignmentTableHidden(false);
      setScheduledAssignmentTableHidden(true);
    }
  };

  const handleScheduledAssignmentTableButtonClick = () => {
    if (!scheduledAssignmentTableHidden) {
      return;
    } else {
      setAssignmentTableHidden(true);
      setScheduledAssignmentTableHidden(false);
    }
  };

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
            <ButtonCard text="Hitta uppgift" icon={<FindInPageIcon />} color="#A3A1D0" to="/teacher/home" />
          </div>
        </Grid>
        <Grid item sm={8} xs={12}>
          <ButtonGroup size="small" aria-label="small button group" style={{ padding: 20, paddingTop: 20 }}>
            <Button
              key="one"
              variant="contained"
              className={assignmentTableHidden ? classes.notActiveButton : classes.activeButton}
              onClick={handleAssignmentTableButtonClickClick}
            >
              Uppgifter
            </Button>
            <Button
              key="two"
              variant="contained"
              className={assignmentTableHidden ? classes.activeButton : classes.notActiveButton}
              onClick={handleScheduledAssignmentTableButtonClick}
            >
              Schemalagda uppgifter
            </Button>
          </ButtonGroup>
          <div style={{ padding: 20, paddingTop: 20 }}>
            {assignmentMetaData !== undefined ? <AssignmentTable data={assignmentMetaData} hidden={assignmentTableHidden} /> : ''}
            {scheduledassignmentMetaData !== undefined ? (
              <ScheduledAssignmentTable data={scheduledassignmentMetaData} hidden={scheduledAssignmentTableHidden} />
            ) : (
              ''
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Assignments;
