import { Button, Grid } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import * as React from 'react';
import '../home.modules.scss';
import EzCorrectIcon from '../../../resources/common/ezCorrectIcon';
import InfoCard from './infoCard';
import cardImg from '../../../resources/cardPhoto.jpeg';
import cardImg2 from '../../../resources/cardPhoto2.jpeg';
import cardIcon from '../../../resources/group.svg';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import DoneIcon from '@material-ui/icons/Done';


const Home: React.FC = () => {
    return(
        <div>
            <div></div>
            <Grid container>
                <Grid item xs={12}>
                    <div className="pictureHeader">
                        <div className="iconPosition">
                            <EzCorrectIcon height={250} width={250}/>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <InfoCard title="Easy learning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " image={cardImg} icon={<SchoolOutlinedIcon />}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <InfoCard title="Easy doing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " image={cardImg2} icon={<DoneIcon/>}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    {/* <InfoCard title="Easy doing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "/> */}
                    <p>huewhfuewhf uhwefuhweufhweu hfwfueh</p>
                    <h1>haudshuasdh </h1>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;