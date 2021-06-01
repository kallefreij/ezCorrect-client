import { makeStyles, Card, Grid } from '@material-ui/core';
import * as React from 'react';
import UserAvatar from '../../../../common/avatar/userAvatar';

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

    return(
        <Card className={classes.root}>
            {/* <div style={{position:'relative'}}>
                <div style={{float:'right', position:'absolute'}}>
                    <h1 className={classes.text}>Matteprov Algebra</h1>
                    <h2 className={classes.text}>Klass: 5B</h2>
                </div>             
                <div style={{float:'right'}}>
                    <h2 style={{float:'right'}}>Pelle Nilsson</h2>
                    <div>
                        <UserAvatar firstName="Test" lastName="Lärare" size={45} image="https://www.fillmurray.com/g/200/300" disableTooltip={true}/>
                    </div>
                    
                </div>           
            
            </div> */}
            <Grid container justify='space-between'>
                <Grid item>
                    <h1 className={classes.text}>Matteprov Algebra</h1>
                    <h2 className={classes.text}>Klass: 5B</h2>
                </Grid>
                <Grid item>
                <div style={{float:'left'}}>
                    <UserAvatar firstName="Pelle" lastName="Jonsson" size={50} image="https://www.fillmurray.com/g/200/300" disableTooltip={true}/> 
                </div>                     
                <h2 style={{float:'left', marginLeft: 10, marginTop: 5}}>Pelle Jonsson</h2>    
                </Grid>
            </Grid>
        
        </Card>
    )
}

export default Header;