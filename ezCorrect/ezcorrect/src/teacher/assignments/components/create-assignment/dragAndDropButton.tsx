import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { theme } from '../../../../common/ezTheme';
import { Button, CardContent, makeStyles } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

export interface IInputProps {
    handleDisable: (isDraggableDisabled: boolean) => void;
}

const useStyles = makeStyles({
    main: {
        position: 'fixed',
        marginTop: '100px',
        marginLeft: '-200px',
        width: '200px',
        height: '100px',
    },
    content: {
        justifyContent: 'center'
    },
    button: {
        fontWeight: 'bold',
    }
})

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const DragAndDropButton: React.FC<IInputProps> = (props) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [isDraggableDisabled, setDisabled] = useState(false);
    const classes = useStyles(windowDimensions);

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDisable = () => {
        const isDisabled = isDraggableDisabled ? false : true;
        setDisabled(isDisabled);
        props.handleDisable(isDisabled);
    }

    return (
        <Card className={classes.main}>
            <CardContent className={classes.content}>
                <Button variant="contained" onClick={handleDisable} color={isDraggableDisabled ? 'secondary' : 'primary'} className={classes.button} >
                    {isDraggableDisabled ? <LockIcon/> : <LockOpenIcon/>}
                    Stäng av drag and drop
                </Button>
            </CardContent>
        </Card>
    );
};

export default DragAndDropButton;