import { Grid } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AssignmentTable from './assignmentTable';


const Assignments:React.FC = () => {
    return(
        <div>
            <div style={{height:100}}/>
            <Grid container>
                <Grid item xs={4}>
                    <div>
                        <ButtonCard text="Skapa uppgift" icon={<CreateIcon/>} color='#A3A1D0' to='/home'/>
                        <ButtonCard text="Rätta uppgift" icon={<DoneIcon/>} color='#A3A1D0' to='/home'/>
                        <ButtonCard text="Hitta uppgift" icon={<FindInPageIcon/>} color='#A3A1D0' to='/home'/>
                        <ButtonCard text="Schemalagda uppgifter" icon={<ScheduleIcon/>} color='#A3A1D0' to='/home'/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <AssignmentTable/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Assignments;