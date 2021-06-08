import { makeStyles, Card, Grid, IconButton } from '@material-ui/core';
import * as React from 'react';
import UserAvatar from '../../../../common/avatar/userAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StudentModal from './studentModal';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        padding: 30,
        height: 100
    },
    text: {
        margin: 0
    }
});

const Header:React.FC = () => {
    const classes = useStyles();
    const [studentModalOpen, setstudentModalOpen] = React.useState(false);

    const handleOpenStudentModal = () => {
        setstudentModalOpen(true);
    };

    const handleCloseStudentModal = () => {
        setstudentModalOpen(false);
    };

    return(
        <Card className={classes.root}>
            <Grid container justify='space-between'>
                <Grid item>
                    <h1 className={classes.text}>Matteprov Algebra</h1>
                    <h2 className={classes.text}>Klass: 5B</h2>
                    <StudentModal handleOpen={handleOpenStudentModal} handleClose={handleCloseStudentModal} open={studentModalOpen}/>
                </Grid>
                <Grid item>
                <div style={{float:'left'}}>
                    <UserAvatar firstName="Pelle" lastName="Jonsson" size={50} image="https://www.fillmurray.com/g/200/300" disableTooltip={true}/> 
                </div>                     
                <h2 style={{float:'left', marginLeft: 10, marginTop: 5}}>Pelle Jonsson</h2>
                <IconButton onClick={handleOpenStudentModal}>
                    <ArrowDropDownIcon/>   
                </IconButton>               
                </Grid>
            </Grid>    
        </Card>
    )
}

export default Header;