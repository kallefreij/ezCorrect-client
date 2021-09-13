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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, useHistory } from 'react-router-dom';
import { ISignUpValues } from '../../App';
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
      margin: 'auto'
  }
}));

export interface ISignUpProps {
    onSignUp: (email: string) => void;
}

const SignUp: React.FC<ISignUpProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const onFirstNameChange = (input: string) => {
        setFirstName(input);   
    }

    const onLastNameChange = (input: string) => {
        setLastname(input);
    }

    const onUsernameChange = (input: string) => {
        setUserName(input);
    }

    const onEmailChange = (input: string) => {
        setEmail(input);
    }

    const onPasswordChange = (input: string) => {
        setPassword(input);
    }

    const onSubmit = async () => {
        try {
            const signUpParams: any = {
                username: username,
                password: password,
                attributes: {
                    email: email,
                    'custom:firstName': firstName,
                    'custom:lastName': lastName
                }  
            }
            const user = await Auth.signUp(signUpParams);
            console.log(user);
            props.onSignUp(username);
            history.push('/confirm') 
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

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
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            onChange={e => onFirstNameChange(e.target.value)}
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            onChange={e => onLastNameChange(e.target.value)}
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={e => onUsernameChange(e.target.value)}
                                id="user"
                                label="Användarnamn"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={e => onEmailChange(e.target.value)}
                                id="username"
                                label="Email Address"
                                name="email"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={e => onPasswordChange(e.target.value)}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <NavLink to="/signin">
                                Already have an account? Sign in
                            </NavLink>
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
}

export default SignUp;