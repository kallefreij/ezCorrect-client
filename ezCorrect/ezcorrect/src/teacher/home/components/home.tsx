import { Button, Grid } from '@material-ui/core';
import * as React from 'react';
import '../home.modules.scss';
import EzCorrectIcon from '../../../common/ezCorrectIcon';
import Navbar from '../../../common/navbar/navbar';
import InfoCard from './infoCard';
import cardImg from '../../../resources/cardPhoto.jpeg';
import cardImg2 from '../../../resources/cardPhoto2.jpeg';
import EventNoteIcon from '@material-ui/icons/EventNote';
import StatsIcon from '@material-ui/icons/Equalizer';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import DoneIcon from '@material-ui/icons/Done';
import ButtonCard from './buttonCard';
import GroupIcon from '@material-ui/icons/Group';
import { NavLink } from 'react-router-dom';


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
                    <InfoCard title="Easy learning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" image={cardImg} icon={<SchoolOutlinedIcon />}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <InfoCard title="Easy doing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" image={cardImg2} icon={<DoneIcon/>}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div style={{marginTop:50}}>
                        <ButtonCard icon={<EventNoteIcon/>} text="Uppgifter" color='#A3A1D0'/>
                        <ButtonCard icon={<GroupIcon />} text="Klasser" color='#D0A1A1'/>
                        <NavLink to="/statistics" style={{textDecoration:'none'}}>
                            <ButtonCard icon={<StatsIcon/>} text="Statistik" color='#D0B9A1'/>
                        </NavLink>
                        
                    </div>                   
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;