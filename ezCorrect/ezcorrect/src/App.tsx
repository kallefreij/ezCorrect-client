import './App.css';

import Navbar from './common/navbar/navbar';
import Router from './common/Routes/router';
import EzSnackbar from './common/ezSnackbar/ezSnackbar';
import { useState } from 'react';
import { useEffect } from 'react';
import ErrorSnackbar from './common/ezSnackbar/snackbarError';
import Amplify, { Auth, Hub, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { setUserState } from './common/user/user.actions';
import { IUser } from './common/user/user.reducer';
import { useDispatch } from 'react-redux';

Amplify.configure(awsconfig);

export interface ISignUpValues {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App: init");
    setAuthenticating(true);
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = async () => {
    await Auth.currentAuthenticatedUser()
      .then((authUser) => {
        setLoggedIn(true);
        const user:IUser = { 
          email: authUser.attributes.email, 
          username: authUser.username,
          firstName: authUser.attributes["custom:firstName"],
          lastName: authUser.attributes["custom:lastName"],
          roles: authUser.signInUserSession.accessToken.payload['cognito:groups']
        };
        dispatch(setUserState(user));
        console.log('Logged in');
      })
      .catch(() => {
        setLoggedIn(false);
        console.log('Not logged in');
      });  
    setAuthenticating(false);
  };

  const onSignIn = () => {
    setLoggedIn(true); // Eftersom inloggningen lyckas sätts den redan här just nu. Detta för att hindra när vi hamnar på /home
    AssessLoggedInState();
  };

  const onSignOut = async () => {
    AssessLoggedInState();
  };

  const onSignUp = async (email: string) => {
    AssessLoggedInState();
    setUserEmail(email);
  };

  const onConfirm = async () => {
    AssessLoggedInState();
  };

  return (
    <div>
      <EzSnackbar />
      <ErrorSnackbar />
      {!isAuthenticating && 
        <Router onSignIn={onSignIn} onSignOut={onSignOut} onSignUp={onSignUp} onConfirm={onConfirm} loggedIn={loggedIn} userEmail={userEmail}/>
      }
    </div>
  );
}

export default App;
