import './App.css';
import HomeTeacher from './teacher/home/components/home';
import Navbar from './common/navbar/navbar';
import Statistics from './teacher/statistics/components/statistics';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Assignments from './teacher/assignments/components/assignments';
import CreateAssignment from './teacher/assignments/components/create-assignment/createAssignment';
import Groups from './teacher/groups/components/groups';
import Group from './teacher/groups/components/group';
import Student from './teacher/student/components/student';
import CorrectAssignment from './teacher/assignments/components/correct-assignment/correctAssignment';
import EzSnackbar from './common/ezSnackbar/ezSnackbar';
import SignIn from './common/signIn/signIn';
import SignUp from './common/signup/signup';
import Confirm from './common/signup/confirm';
import { useState } from 'react';
import { useEffect } from 'react';
import StartHome from './start/home';
import ErrorSnackbar from './common/ezSnackbar/snackbarError';

// @ts-ignore
import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

export interface ISignUpValues {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

// TODO skapa din egen utloggningsknapp med hjälp av Auth.signOut();
// TODO Om oinloggad visar vi en annan eller en modifierad navbar. Samt curvy sidan. Annars teacher ATM.
function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    AssessLoggedInState()
  }, [])

  const AssessLoggedInState = async () => {
    await Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true)
        console.log("Logged in")
      })
      .catch(() => {
        setLoggedIn(false)
        console.log("Not logged in")
      })
  }

  const onSignIn = () => {
    AssessLoggedInState();
  }

  const onSignOut = async () => {
    try{
      await Auth.signOut();
      AssessLoggedInState();
    } catch(error){
      console.log('Error logging out', error);
    }
  }

  const onSignUp = async (email: string) => {
    AssessLoggedInState();
    setUserEmail(email);
  }

  const onConfirm = async () => {
    AssessLoggedInState();
  }

  return (
    <div>
      {loggedIn ?
      <Router>
        <Switch>
          <Route path="/teacher/">
            <Navbar onSignOut={onSignOut}/>
            <Route exact path="/teacher/home" component={HomeTeacher}></Route>
            <Route exact path="/teacher/assignments" component={Assignments}></Route>
            <Route exact path="/teacher/assignments/create" component={CreateAssignment}></Route>
            <Route exact path="/teacher/assignments/correct" component={CorrectAssignment}></Route>
            <Route exact path="/teacher/groups" component={Groups}></Route>
            <Route exact path="/teacher/group" component={Group}></Route>
            <Route exact path="/teacher/statistics" component={Statistics}></Route>
            <Route exact path="/teacher/student" component={Student}></Route>
            <Route exact path="/teacher/profile" component={Student}></Route>
          </Route>         
          <Route path="/">
              <Redirect to="/teacher/home" />
          </Route>
        </Switch>
      </Router>
      :
      <Router>
        <Switch>
          <Route exact path="/home" component={StartHome}></Route>
          <Route exact path="/signin" render={() => <SignIn onSignIn={onSignIn}/>}></Route>
          <Route exact path="/signup" render={() => <SignUp onSignUp={onSignUp}/>}></Route>
          <Route exact path="/confirm" render={() => <Confirm email={userEmail} onConfirm={onConfirm}/>}></Route>
          <Route path="/">
              <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
      }
      
      {/* <HomeTeacher/>
      <Statistics/> */}
    </div>
  );
}

export default App;

