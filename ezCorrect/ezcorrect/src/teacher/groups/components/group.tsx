import { Grid } from '@material-ui/core';
import * as React from 'react';
import ActivityBox from './activityBox';
import Calender from './calender';

const Group:React.FC = () => {

    return(
        <div>
            <div style={{height:100}}/>           
            <Grid container>
                <Grid item xs={4}>
                    <div style={{margin:100}}>  
                        <h1>Klass 4B</h1>                   
                        <div>
                            <h1>Kommande aktiviteter</h1>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <ActivityBox numberOfTheMonth={20} month="Januari" activity="Glosor"/>
                                </Grid>
                                <Grid item>
                                    <ActivityBox numberOfTheMonth={24} month="Januari" activity="Prov"/>
                                </Grid>
                                <Grid item>
                                    <ActivityBox numberOfTheMonth={5} month="Februari" activity="Inlämning"/>
                                </Grid>
                            </Grid>
                        </div>                              
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Calender/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Group;