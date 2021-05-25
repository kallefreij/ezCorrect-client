import { createMuiTheme, Grid } from '@material-ui/core';
import React from 'react';
import HeaderTitleAndDescription from './headerTitleAndDescription';
import CreateQuestionCard from './createQuestionCard';
import ToolSidebar from './toolSidebar';


const CreateAssignment: React.FC = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={3} md={2} lg={2}></Grid>
                <Grid item sm={6} md={8} lg={8}>
                    <HeaderTitleAndDescription/>
                    <CreateQuestionCard/>    
                </Grid>
 
                <Grid item sm={3} md={2} lg={2}></Grid>
            </Grid>
        </div>
    );
};

export default CreateAssignment;