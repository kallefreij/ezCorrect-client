import { Button, Grid } from '@material-ui/core';
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

const getAssignmentMetaData = createSelector<IStateTree, IAssignmentState, IAssignmentMetaData[]>(
    (state) => state.assignments,
    (a) => a.assignmentMetadata
);

const Assignments:React.FC = () => {
    const dispatch = useDispatch();
    const assignmentMetaData = useSelector(getAssignmentMetaData);

    React.useEffect(() => {
        console.log("FETCHING");
        dispatch(fetchAssignmentsNow());
      }, []);

    return(
        <div>
            <div style={{height:100}}/>
            <Grid container>
                <Grid item xs={4}>
                    <div>
                        <ButtonCard text="Skapa uppgift" icon={<CreateIcon/>} color='#A3A1D0' to='/assignments/create'/>
                        <ButtonCard text="Rätta uppgift" icon={<DoneIcon/>} color='#A3A1D0' to='/assignments/correct'/>
                        <ButtonCard text="Schemalagda uppgifter" icon={<ScheduleIcon/>} color='#A3A1D0' to='/home'/>
                        <ButtonCard text="Hitta uppgift" icon={<FindInPageIcon/>} color='#A3A1D0' to='/home'/>               
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        {assignmentMetaData != undefined ? <AssignmentTable data={assignmentMetaData}/> : ""}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Assignments;