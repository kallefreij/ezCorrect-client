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
import Container from '@material-ui/core/Container';
import { theme } from '../ezTheme';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import Amplify, { Auth } from 'aws-amplify';

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
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      color: "#FFFFFF"
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

    }

    const handlePassword = (input: string) => {
        
    }

    const onSignIn = () => {
        props.onSignIn();
    }

    const handleSignIn = async () => {
        try {
            // const user = await Auth.signIn(userName, password);
            // history.push('/');
            onSignIn();
        }
        catch (error){
            console.log('Unable to log in due to: ', error);
        }
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form className={classes.form} >
                        <TextField
                            variant="outlined"
                            required
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => handleUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            name="password"
                            label="Lösenord"
                            type="password"
                            id="password"    
                            autoComplete="password"
                            onChange={e => handleUsername(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSignIn}
                            className={classes.submit}
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
        </ThemeProvider>
    </Container>
    );
};

export default SignIn;


