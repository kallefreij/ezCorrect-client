import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Paper } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    padding: '40px',
    margin: 'auto',
  },
}));

export interface IConfirmProps {
  email: string;
  onConfirm: () => void;
}

const Confirm: React.FC<IConfirmProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState(props.email);
  const [confCode, setConfCode] = useState('');

  const onUsernameChange = (input: string) => {
    setUsername(input);
  };

  const onConfirmationChange = (input: string) => {
    setConfCode(input);
  };

  const onConfirm = async () => {
    try {
      await Auth.confirmSignUp(username, confCode);
      props.onConfirm();
      history.push('/signin');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <div>
      <Paper className={classes.card}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={(e) => onUsernameChange(e.target.value)}
                    value={username}
                    id="username"
                    label="Användarnamn"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={(e) => onConfirmationChange(e.target.value)}
                    name="confirmationcode"
                    label="Bekräftelsekod"
                    type="confirmationcode"
                    id="confirmationcode"
                  />
                </Grid>
              </Grid>
              <Button fullWidth variant="contained" color="primary" onClick={onConfirm} className={classes.submit}>
                Bekfräfta
              </Button>
              <Grid container>
                <Grid item>
                  <NavLink to="/signin">Already have an account? Sign in</NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

export default Confirm;
