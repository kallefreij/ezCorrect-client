import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import GroupIcon from '@material-ui/icons/PeopleOutline';
import UserAvatar from '../../../common/avatar/userAvatar';
import Chat from './chat';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 500,
    marginTop: 50,
    position: 'relative',
  },
  text: {
    margin: 0,
    textAlign: 'center',
  },
  number: {
    fontSize: 60,
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    height: 80,
  },
  title: {
    fontSize: 30,
    position: 'absolute',
    margin: 20,
  },
  iconButton: {
    float: 'right',
    margin: 15,
  },
  icon: {
    fontSize: 30,
    color: 'black',
  },
});

const Students: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [modeSwitch, setModeSwitch] = React.useState(true);
  const students = [
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'Jörgen', lastName: 'Olsson', image: '' },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'Pelle', lastName: 'Nilsson', image: '' },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'Olle', lastName: 'Eriksson', image: '' },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'Kalle', lastName: 'Freij', image: '' },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'David', lastName: 'Lingvall', image: '' },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    {
      firstName: 'Pelle',
      lastName: 'Jonsson',
      image: 'https://www.fillmurray.com/g/200/300',
    },
    { firstName: 'Jaba', lastName: 'DeHut', image: '' },
  ];

  const handleModeSwitch = () => {
    modeSwitch ? setModeSwitch(false) : setModeSwitch(true);
  };
  const handleStudentClick = (student: any) => {
    console.log(student);
    history.push('/student');
  };
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <div className={classes.header}>
          <Typography className={classes.title}>Studenter</Typography>
          <IconButton className={classes.iconButton} onClick={handleModeSwitch}>
            {modeSwitch ? (
              <ChatBubbleOutlineIcon className={classes.icon} />
            ) : (
              <GroupIcon className={classes.icon} />
            )}
          </IconButton>
        </div>
        {modeSwitch ? (
          <CardContent>
            {students.map((x, i) => (
              <UserAvatar
                key={i}
                firstName={x.firstName}
                lastName={x.lastName}
                size={70}
                image={x.image}
                onClick={() => handleStudentClick(x)}
              />
            ))}
          </CardContent>
        ) : (
          <CardContent>
            <Chat />
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Students;
