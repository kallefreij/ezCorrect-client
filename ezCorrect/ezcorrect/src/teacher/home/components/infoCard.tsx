import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, Hidden, makeStyles, SvgIcon, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import img from '../../../resources/cardPhoto.jpeg';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

  const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
        maxWidth: 400,
        backgroundColor: '#A1D0A5',
        margin: 'auto',
        marginTop: 50,
        borderRadius: 10,  
        [theme.breakpoints.down('sm')]: {
          fontSize:10,
          height: 100,
          marginTop: 10,
          maxWidth: '90%',
          display: 'flex',
        },
      },
      media: {
        height: 300,
        [theme.breakpoints.down('sm')]: {
            height: 100,
            width: 100,
          },
      },
      content: {
          height: 200,
          color: 'white',
          marginTop: 50,
          [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            padding: 0,
            marginLeft: 10
          },
      },
      text: {
          color: 'white',
          [theme.breakpoints.down('sm')]: {
            marginTop: -10,
            marginRight: 5,
            fontSize: 10
          },
      },
      circle: {
          height: 150,
          width: 150,
          backgroundColor: 'white',
          borderRadius: 75,
          position: 'absolute',
          marginTop: -70,
          marginLeft: 125
      }
  }),
);

export interface IInfoCardProps{
    title: string;
    text: string;
    image: any;
    icon: any;
}

const InfoCard:React.FC<IInfoCardProps> = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <div>
                <CardMedia
                className={classes.media}
                image={props.image}
                />
                {/* Fixa gradient dynamiskt, finns css för hur man gör det med en bild */}
                {/* <div className="imageGradient">
                </div> */}
                <Hidden smDown>
                    <div className={classes.circle}>
                        <SvgIcon style={{fontSize: 50, marginTop: 50, marginLeft: 50}}>
                            {props.icon}
                        </SvgIcon>                    
                    </div>
                </Hidden>
                
                
                

                </div>
                <CardContent className={classes.content}>
                    <h1>
                        {props.title}
                    </h1>
                    <p className={classes.text}>{props.text}</p>
                </CardContent>
        </Card>
    )
}

export default InfoCard;