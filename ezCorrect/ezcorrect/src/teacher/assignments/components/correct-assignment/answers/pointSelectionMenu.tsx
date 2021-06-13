import { createStyles, Grid, makeStyles, Popover, Slider, Theme, ThemeProvider, Typography } from '@material-ui/core';
import * as React from 'react';
import { NamedTupleMember } from 'typescript';
import { theme } from '../../../../../common/ezTheme';

interface PointSelectionProps{
    points?: number;
    maxPoint?: number;
    id: string;
    open: boolean;
    anchorEl: HTMLButtonElement | null;
    setAnchorEl: (e:null) => void;
    setOpen: (o:boolean) => void;
    setStatus: (s:number, p:number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 250,
      padding: 10
    },
    slider: {
        width: 200
    },
  }),
);


const PointSelectionMenu:React.FC<PointSelectionProps> = (props) => {
    const classes = useStyles();
    let answerStatus = 0;
    const [points, setPoints] = React.useState<number>(1);

    const handleClose = () => {
        if(points === props.maxPoint){
            answerStatus = 4;
        } 
        else if(points === 0){
            answerStatus = 2;
        } 
        else {
            answerStatus = 3;
        }
        props.setAnchorEl(null);
        props.setOpen(false);
        props.setStatus(answerStatus,points);
    };

    function valuetext(value: number) {
        setPoints(value);
        return `${value}`;  
    }

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: props.maxPoint != undefined ? props.maxPoint : 0,
            label: props.maxPoint != undefined ? props.maxPoint : '0'
        }
    ];

    return(
        <Popover
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={handleClose}
            
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
        >

        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item>
                <Typography id="discrete-slider-always" gutterBottom>
                    Antal poäng
                </Typography>
                <ThemeProvider theme={theme}>
                    <Slider
                        color="primary"
                        key={props.id}
                        defaultValue={props.points}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={0}
                        marks={marks}
                        max={props.maxPoint}
                        className={classes.slider}
                    />
                </ThemeProvider>
            </Grid>
        </Grid>
           
        </Popover>
    )
}

export default PointSelectionMenu;