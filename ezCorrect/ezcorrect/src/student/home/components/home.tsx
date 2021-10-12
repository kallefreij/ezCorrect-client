import { Grid, Hidden } from '@material-ui/core';
import * as React from 'react';
import ButtonCard from '../../../common/buttons/buttonCard';
import EzCorrectIcon from '../../../common/ezCorrectIcon';
import InfoCard from '../../../common/cards/infoCard';
import cardImg from '../../../resources/cardPhoto.jpeg';
import cardImg2 from '../../../resources/cardPhoto2.jpeg';
import EventNoteIcon from '@material-ui/icons/EventNote';
import StatsIcon from '@material-ui/icons/Equalizer';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import DoneIcon from '@material-ui/icons/Done';
import GroupIcon from '@material-ui/icons/Group';

const StudentHome: React.FC = () => {
  return (
    <div>
      <Grid container>
        <Hidden smUp>
          <div className="center">
            <EzCorrectIcon height={100} width={100} />
          </div>
        </Hidden>

        <Hidden smDown>
          <Grid item xs={12}>
            <div className="pictureHeader">
              <div className="iconPosition">
                <EzCorrectIcon height={250} width={250} />
              </div>
            </div>
          </Grid>
        </Hidden>
        <Grid item lg={4} md={6} xs={12}></Grid>
        <Grid item lg={4} md={6} xs={12}></Grid>

        <Grid item lg={4} md={12} xs={12}>
          <div style={{ marginTop: 50 }}>
            <ButtonCard icon={<EventNoteIcon />} text="Uppgifter" color="#A3A1D0" to="/student/assignments" />
            <ButtonCard icon={<GroupIcon />} text="Min klass" color="#D0A1A1" to="/student/assignment/start" />
            <ButtonCard icon={<StatsIcon />} text="Statistik" color="#D0B9A1" to="/home" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentHome;
