import { Grid, Hidden } from '@material-ui/core';
import * as React from 'react';
import '../home.modules.scss';
import EzCorrectIcon from '../../../common/ezCorrectIcon';
import InfoCard from './infoCard';
import cardImg from '../../../resources/cardPhoto.jpeg';
import cardImg2 from '../../../resources/cardPhoto2.jpeg';
import EventNoteIcon from '@material-ui/icons/EventNote';
import StatsIcon from '@material-ui/icons/Equalizer';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import DoneIcon from '@material-ui/icons/Done';
import ButtonCard from '../../../common/buttons/buttonCard';
import GroupIcon from '@material-ui/icons/Group';

const Home: React.FC = () => {
  return (
    <div>
      <div></div>
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
        <Grid item lg={4} md={6} xs={12}>
          <InfoCard
            title="Easy learning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            image={cardImg}
            icon={<SchoolOutlinedIcon />}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <InfoCard
            title="Easy doing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            image={cardImg2}
            icon={<DoneIcon />}
          />
        </Grid>

        <Grid item lg={4} md={12} xs={12}>
          <div style={{ marginTop: 50 }}>
            <ButtonCard
              icon={<EventNoteIcon />}
              text="Uppgifter"
              color="#A3A1D0"
              to="/teacher/assignments"
            />
            <ButtonCard
              icon={<GroupIcon />}
              text="Klasser"
              color="#D0A1A1"
              to="/teacher/groups"
            />
            <ButtonCard
              icon={<StatsIcon />}
              text="Statistik"
              color="#D0B9A1"
              to="/teacher/statistics"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
