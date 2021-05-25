import { Grid } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import GroupIcon from '@material-ui/icons/Group';

const Groups:React.FC = () => {
    return(
        <div>
            <div style={{height:100}}/>
            <Grid container>
                <Grid item xs={4}>
                    <div>
                        <ButtonCard text="Grupp" icon={<GroupIcon/>} color='#D0A1A1' to='/group'/>             
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Groups;