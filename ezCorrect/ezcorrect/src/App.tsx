import './App.css';
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
  const [teacherAuth, setTeacherAuth] = useState(false);
  const [studentAuth, setStudentAuth] = useState(false);

  const [isAuthenticating, setAuthenticating] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App: init');
    setAuthenticating(true);
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = async () => {
    await Auth.currentAuthenticatedUser()
      .then((authUser) => {
        setLoggedIn(true);
        const user: IUser = {
          email: authUser.attributes.email,
          username: authUser.username,
          firstName: authUser.attributes['custom:firstName'],
          lastName: authUser.attributes['custom:lastName'],
          roles: authUser.signInUserSession.accessToken.payload['cognito:groups'],
        };
        setRoles(user);
        dispatch(setUserState(user));
        console.log('Logged in');
      })
      .catch(() => {
        setLoggedIn(false);
        console.log('Not logged in');
      });
    setAuthenticating(false);
  };

  const setRoles = (user: IUser) => {
    const roles = user.roles;
    if (roles === undefined) {
      setTeacherAuth(false);
      setStudentAuth(false);
    } else {
      roles.forEach((role) => {
        console.log(role);
        switch (role) {
          case 'Teacher':
            setTeacherAuth(true);
            break;
          case 'Student':
            setStudentAuth(true);
            break;
          case 'Admin':
            setTeacherAuth(true);
            setStudentAuth(true);
        }
      });
    }
  };

  const onSignIn = () => {
    setLoggedIn(true); // Eftersom inloggningen lyckas s??tts den redan h??r just nu. Detta f??r att hindra n??r vi hamnar p?? /home
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
      {!isAuthenticating && (
        <Router
          onSignIn={onSignIn}
          onSignOut={onSignOut}
          onSignUp={onSignUp}
          onConfirm={onConfirm}
          loggedIn={loggedIn}
          teacherAuth={teacherAuth}
          studentAuth={studentAuth}
          userEmail={userEmail}
        />
      )}
    </div>
  );
}

export default App;
