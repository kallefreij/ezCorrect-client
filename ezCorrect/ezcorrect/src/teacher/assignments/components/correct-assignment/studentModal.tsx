import {
  Button,
  Checkbox,
  createStyles,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  makeStyles,
  Theme,
} from '@material-ui/core';
import * as React from 'react';
import UserAvatar from '../../../../common/avatar/userAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 400,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 400,
      paddingTop: 0,
    },
    dialogActions: {
      backgroundColor: '#A1D0A5',
      color: 'white',
    },
    button: {
      color: 'white',
      fontWeight: 'bold',
    },
  })
);

interface StudentModalProps {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}
const StudentModal: React.FC<StudentModalProps> = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      disableEscapeKeyDown
      aria-labelledby="confirmation-dialog-title"
      onClose={props.handleClose}
      open={props.open}
    >
      <DialogTitle
        id="confirmation-dialog-title"
        className={classes.dialogActions}
      >
        Matteprov Algebra
      </DialogTitle>
      <List className={classes.root}>
        <ListSubheader>Agerade</ListSubheader>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <UserAvatar
                  firstName="Pelle"
                  lastName="Jonsson"
                  size={40}
                  image="https://www.fillmurray.com/g/200/300"
                  disableTooltip={true}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  //onChange={handleToggle(value)}
                  //checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <ListSubheader>Oagerade</ListSubheader>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <UserAvatar
                  firstName="Pelle"
                  lastName="Jonsson"
                  size={40}
                  image="https://www.fillmurray.com/g/200/300"
                  disableTooltip={true}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  //onChange={handleToggle(value)}
                  //checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <DialogActions className={classes.dialogActions}>
        <Button onClick={props.handleClose} className={classes.button}>
          Stäng
        </Button>
        <Button onClick={props.handleClose} className={classes.button}>
          Välj
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentModal;
