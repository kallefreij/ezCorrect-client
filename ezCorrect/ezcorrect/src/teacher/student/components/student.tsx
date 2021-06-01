import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import UserAvatar from '../../../common/avatar/userAvatar';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        top: {
            height: 100,
            [theme.breakpoints.down('sm')]: {
                height: 50,
            },
            [theme.breakpoints.down('xs')]: {
                height: 10,
            },
        },
        margin: {
            marginTop: 50,
            marginLeft: 100,
            [theme.breakpoints.down('lg')]: {
                margin: 50,
            },
            [theme.breakpoints.down('xs')]: {
                margin: 10,
            },
        },
    }),
);

const Student:React.FC = () => {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.top}/>
            <div className={classes.margin}>        
                <div style={{float:'left'}}>
                    <UserAvatar firstName="Pelle" lastName="Jonsson" size={100} image="https://www.fillmurray.com/g/200/300" disableTooltip={true}/> 
                </div>                     
                <h1 style={{float:'left', marginLeft: 30}}>Pelle Jonsson</h1>           
            </div>           
        </div>
    )
}

export default Student;