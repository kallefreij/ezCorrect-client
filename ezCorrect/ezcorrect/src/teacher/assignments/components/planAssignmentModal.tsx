import {
  useTheme,
  useMediaQuery,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  createStyles,
  makeStyles,
  Theme,
  TextField,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IUserState, IUser } from '../../../common/user/user.reducer';
import { IStateTree } from '../../../redux/rootReducer';
import { saveScheduledAssignment } from '../assignments.actions';
import { IAssignmentMetaData, ICreateScheduledAssignment, IScheduledAssignment } from '../assignments.interfaces';
import { IAssignmentState } from '../assignments.reducer';

interface IPlanAssignmentModalProps {
  open: boolean;
  handleClose: () => void;
}

const getSelectedAssignmentFromState = createSelector<IStateTree, IAssignmentState, IAssignmentMetaData>(
  (state) => state.assignments,
  (a) => a.selectedAssignment
);

const getUserData = createSelector<IStateTree, IUserState, IUser>(
  (state) => state.user,
  (a) => a.loggedInUser
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   minWidth: 400,
      //   position: 'relative',
      //   overflow: 'auto',
      //   maxHeight: 400,
      //   paddingTop: 0
      backgroundColor: '#E5E5E5',
    },
    dialogActions: {
      backgroundColor: '#A3A1D0',
      color: 'white',
    },
    dialogActionsBottom: {
      marginTop: 50,
    },
    scheduleButton: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#A1D0A5',
      '&:hover': {
        backgroundColor: '#4e9a55',
      },
    },
    cancelButton: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#989898',
      '&:hover': {
        backgroundColor: '#5d5d5d',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    formControlCombo: {
      marginTop: 5,
      marginBottom: 5,
    },
  })
);

const PlanAssignmentModal: React.FC<IPlanAssignmentModalProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [personName, setPersonName] = React.useState<string[]>([]);
  const selectedAssignment = useSelector(getSelectedAssignmentFromState);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const [date, setDate] = React.useState<string>();
  const [startTime, setStartTime] = React.useState<string>();
  const [endTime, setEndTime] = React.useState<string>();
  const [group, setGroup] = React.useState<string>();
  //Validerings hooks
  const [dateFieldError, setDateFieldError] = React.useState<boolean>(false);
  const [dateFieldErrorText, setDateFieldErrorText] = React.useState<string>();
  const [startTimeFieldError, setStartTimeFieldError] = React.useState<boolean>(false);
  const [startTimeFieldErrorText, setStartTimeFieldErrorText] = React.useState<string>();
  const [endTimeFieldError, setEndTimeFieldError] = React.useState<boolean>(false);
  const [endTimeFieldErrorText, setEndTimeFieldErrorText] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleDateFieldChange = (input:string) => {
    if(new Date(input) < new Date){
      setDateFieldError(true)
      setDateFieldErrorText("Datum f??r inte vara mindre ??n dagens datum")
    }
    else{
      setDateFieldError(false)
      setDateFieldErrorText("")
      setDate(input)
    }
  }

  const handleStartTimeFieldChange = (input:string) => {
    if(endTime != undefined){
      if(input > endTime){
        setStartTimeFieldError(true)
        setStartTimeFieldErrorText("Starttiden f??r inte vara efter sluttid")
      }
      else{
        setStartTimeFieldError(false)
        setStartTimeFieldErrorText("")
        setEndTimeFieldError(false)
        setEndTimeFieldErrorText("")
        setStartTime(input)
      }
    }
    else{
      setStartTime(input)
    }
  }

  const handleEndTimeFieldChange = (input:string) => {
    if(startTime != undefined){
      if(input < startTime){
        setEndTimeFieldError(true)
        setEndTimeFieldErrorText("Sluttiden f??r inte vara innan starttid")
      }
      else{
        setEndTimeFieldError(false)
        setEndTimeFieldErrorText("")
        setStartTimeFieldError(false)
        setStartTimeFieldErrorText("")
        setEndTime(input)
      }
    }
    else{
      setEndTime(input)
    }
  }

  const handleSave = () => {
    const startDateAndTime = new Date(`${date} ${startTime}`);
    const endDateAndTime = new Date(`${date} ${endTime}`);
    const scheduledAssignment:ICreateScheduledAssignment = {creator: userData.username, title: selectedAssignment.title, assignedTo: "asdas", assignmentId: selectedAssignment._id, startTime: startDateAndTime, endTime: endDateAndTime, studentUser: 'teststudent'} 
    dispatch(saveScheduledAssignment(scheduledAssignment));
  }

  const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
        //className={classes.root}
      >
        <DialogTitle id="responsive-dialog-title" className={classes.dialogActions}>
          Schemal??gg prov
        </DialogTitle>
        <DialogContent>
          <h3>Prov: {selectedAssignment.title}</h3>
          <h3>Fr??gor: {selectedAssignment.questions}</h3>

          <TextField
            error={dateFieldError}
            helperText={dateFieldErrorText}
            id="date"
            label="Datum"
            type="date"
            //defaultValue="2017-05-24"
            className={classes.formControlCombo}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            required
            onChange={(e) => handleDateFieldChange(e.target.value)}
            //autoFocus
          />
          <TextField
            error={startTimeFieldError}
            id="time"
            label="N??r"
            type="time"
            //defaultValue="07:30"
            variant="outlined"
            fullWidth
            //className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            className={classes.formControlCombo}
            onChange={(e) => handleStartTimeFieldChange(e.target.value)}
            required
            helperText={startTimeFieldErrorText}
          />
          <TextField
            id="time"
            label="Till"
            type="time"
            //defaultValue="07:30"
            variant="outlined"
            fullWidth
            //className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            className={classes.formControlCombo}
            onChange={(e) => handleEndTimeFieldChange(e.target.value)}
            required
            error={endTimeFieldError}
            helperText={endTimeFieldErrorText}
          />
          <FormControl variant="outlined" fullWidth className={classes.formControlCombo}>
            <InputLabel htmlFor="outlined-age-native-simple">Klass</InputLabel>
            <Select
              native
              //value={state.age}
              onChange={handleChange}
              label="Klass"
              inputProps={{
                name: 'Klass',
                id: 'outlined-age-native-simple',
              }}
              required
            >
              <option aria-label="None" value="" />
              <option value={10}>Klass 4A</option>
              <option value={20}>Klass 4B</option>
              <option value={30}>Klass 6A</option>
            </Select>
          </FormControl>
          {/* <FormControl variant="outlined" fullWidth className={classes.formControlCombo}>
                        <InputLabel htmlFor="outlined-age-native-simple">Elever</InputLabel>
                        <Select
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => (selected as string[]).join(', ')}
                            //MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}
          <TextField margin="dense" id="name" label="Hj??lpmedel" type="email" variant="outlined" fullWidth />
        </DialogContent>
        <DialogActions className={classes.dialogActionsBottom}>
          <Button className={classes.cancelButton} onClick={props.handleClose}>
            Avbryt
          </Button>
          <Button className={classes.scheduleButton} onClick={handleSave}>
            Schemal??gg
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PlanAssignmentModal;
