import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid, SvgIcon } from '@material-ui/core';
import * as React from 'react';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: 20,
        borderRadius: 10,
        color: 'white'
    },
  });

  export interface IButtonCardProps{
      text: string;
      icon: any;
      color: string;
  }
  
const ButtonCard:React.FC<IButtonCardProps> = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root} style={{backgroundColor: props.color}}>
          <CardActionArea>
            <CardContent>
                <Grid container spacing={4}>
                    <Grid item>
                        <SvgIcon style={{fontSize: 40, marginTop: 22}}>
                            {props.icon}
                        </SvgIcon>
                    </Grid>
                    <Grid item>
                        <h1>{props.text}</h1>
                    </Grid>
                </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default ButtonCard;