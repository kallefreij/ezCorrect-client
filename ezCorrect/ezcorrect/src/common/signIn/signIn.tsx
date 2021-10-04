import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../ezTheme';
import Container from '@material-ui/core/Container';
import { NavLink, useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Auth } from 'aws-amplify';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        ezCorrect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(161, 208, 165)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#FFFFFF',
  },
  link: {
    textDecoration: 'none',
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
  input: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px rgba(161, 208, 165, 0.2) inset',
    },
  },
}));

export interface ISigninProps {
  onSignIn: () => void;
}

const SignIn: React.FC<ISigninProps> = (props) => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsername = (input: string) => {
    setUserName(input);
  };

  const handlePassword = (input: string) => {
    setPassword(input);
  };

  const onSignIn = () => {
    props.onSignIn();
  };

  const handleSignIn = async () => {
    try {
      await Auth.signIn(userName, password);
      history.push('/teacher/home');
      console.log(history)
      onSignIn();
    } catch (error) {
      console.log('Unable to log in due to: ', error);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper className={classes.card}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="primary">
                Sign in
              </Typography>
              <form className={classes.form}>
                <TextField
                  inputProps={{ className: classes.input }}
                  variant="outlined"
                  required
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => handleUsername(e.target.value)}
                />
                <TextField
                  inputProps={{ className: classes.input }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  name="password"
                  label="Lösenord"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={(e) => handlePassword(e.target.value)}
                />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button fullWidth variant="contained" onClick={handleSignIn} className={classes.submit} color="primary">
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <NavLink to="#" className={classes.link}>
                      Forgot password?
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/signup" className={classes.link}>
                      {"Don't have an account? Sign Up"}
                    </NavLink>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
