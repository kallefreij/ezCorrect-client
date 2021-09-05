import { createStyles, Grid, Hidden, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import GroupIcon from '@material-ui/icons/Group';
import EzCorrectIcon from '../../../common/ezCorrectIcon';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    topDiv: {
        height: 100,
        [theme.breakpoints.down('sm')]: {
            height: 0
        },
    }   
}));

const Groups:React.FC = () => {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.topDiv}/>
            <Hidden smUp>
                <div className="center">
                    <EzCorrectIcon height={100} width={100}/>
                </div>                   
            </Hidden>
            <Grid container>
                <Grid item sm={4} xs={12}>
                    <div>
                        <ButtonCard text="Grupp" icon={<GroupIcon/>} color='#D0A1A1' to='/teacher/group'/>             
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