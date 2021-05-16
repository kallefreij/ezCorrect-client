import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import * as React from 'react';
import img from '../../../resources/cardPhoto.jpeg';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      backgroundColor: '#A1D0A5',
      margin: 'auto',
      marginTop: 50,
      borderRadius: 10
    },
    media: {
      height: 300,
    },
    content: {
        height: 200,
        color: 'white',
        marginTop: 50
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
  });

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
                <CardMedia
                className={classes.media}
                image={props.image}
                />
                {/* Fixa gradient dynamiskt, finns css för hur man gör det med en bild */}
                {/* <div className="imageGradient">
                </div> */}
                <div className={classes.circle}>
                    <SvgIcon style={{fontSize: 50, marginTop: 50, marginLeft: 50}}>
                        {props.icon}
                    </SvgIcon>                    
                </div>
                <CardContent className={classes.content}>
                    <h1>
                        {props.title}
                    </h1>
                    <p style={{color: 'black'}}>{props.text}</p>
                </CardContent>
        </Card>
    )
}

export default InfoCard;