import { Button, Grid } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import * as React from 'react';
import '../home.modules.scss';
import img from '../../../resources/ezCorrectIcon.png';
import EzCorrectIcon from '../../../common/ezCorrectIcon';
import Navbar from '../../../common/navbar';

const Home: React.FC = () => {
    return(
        <div>
            <div></div>
            <Grid container>
                <Grid item xs={12}>
                    <div className="pictureHeader">
                        <Navbar/>
                        <div className="iconPosition">
                            <EzCorrectIcon height={250} width={250}/>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className="card">
                        <h1>hej</h1>
                        <Button color="primary" variant="contained">Tryck</Button>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                     <div className="card"></div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className="card"></div>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;