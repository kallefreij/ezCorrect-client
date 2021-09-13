import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import {
  Button,
  CardContent,
  CircularProgress,
  FormControlLabel,
  makeStyles,
  Switch,
  ThemeProvider,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { blueTheme } from '../../../../common/ezTheme';
import { IStateTree } from '../../../../redux/rootReducer';
import { IAssignmentState } from '../../assignments.reducer';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { setSaveLoadingStatus } from '../../assignments.actions';

export interface IInputProps {
  handleDisable: (isDraggableDisabled: boolean) => void;
  handleSave: () => void;
  handleClean: () => void;
}

const useStyles = makeStyles({
  main: {
    left: '50%',
    position: 'fixed',
    marginTop: '100px',
    marginLeft: '420px',
    width: '200px',
    height: '300px',
  },
  content: {
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marginTop: '5px',
    fontWeight: 'bold',
  },
  buttonProgress: {
    color: '#1976d2',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const getSaveLoadingStatus = createSelector<
  IStateTree,
  IAssignmentState,
  boolean
>(
  (state) => state.assignments,
  (a) => a.saveLoadingStatus
);

const CardSidebarMenu: React.FC<IInputProps> = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isDraggableDisabled, setDisabled] = useState(false);
  const loading = useSelector(getSaveLoadingStatus);
  const classes = useStyles(windowDimensions);
  const dispatch = useDispatch();

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
  };

  const handleSave = () => {
    dispatch(setSaveLoadingStatus(true));
    props.handleSave();
  };

  const handleClean = () => {
    props.handleClean();
  };

  return (
    <ThemeProvider theme={blueTheme}>
      <Card className={classes.main}>
        <CardContent className={classes.content}>
          <Button
            variant="contained"
            onClick={handleSave}
            className={classes.button}
            color="primary"
            disabled={loading}
          >
            <SaveIcon />
            Spara prov
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </Button>

          <Button
            variant="contained"
            onClick={handleClean}
            className={classes.button}
            color="secondary"
          >
            <SaveIcon />
            Rensa
          </Button>

          <Button
            variant="outlined"
            onClick={handleDisable}
            color={isDraggableDisabled ? 'secondary' : 'primary'}
            className={classes.button}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={isDraggableDisabled}
                  onChange={handleDisable}
                />
              }
              label=""
            />
            {isDraggableDisabled ? 'Inaktivera kortdrag' : 'Aktivera kortdrag'}
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default CardSidebarMenu;
