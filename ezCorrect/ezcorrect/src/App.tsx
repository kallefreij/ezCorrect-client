import './App.css';
import HomeTeacher from './teacher/home/components/home';
import Navbar from './common/navbar/navbar';
import SignInNavbar from './common/navbar/signInNavbar';
import Statistics from './teacher/statistics/components/statistics';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Assignments from './teacher/assignments/components/assignments';
import CreateAssignment from './teacher/assignments/components/create-assignment/createAssignment';
import Groups from './teacher/groups/components/groups';
import Group from './teacher/groups/components/group';
import Student from './teacher/student/components/student';
import CorrectAssignment from './teacher/assignments/components/correct-assignment/correctAssignment';
import EzSnackbar from './common/ezSnackbar/ezSnackbar';
import SignIn from './common/signIn/signIn';
import { useState } from 'react';
import { useEffect } from 'react';

// @ts-ignore
import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

// TODO skapa din egen utloggningsknapp med hjälp av Auth.signOut();
// TODO Om oinloggad visar vi en annan eller en modifierad navbar. Samt curvy sidan. Annars teacher ATM.
function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState()
  }, [])

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true)
      })
      .catch(() => {
        setLoggedIn(false)
      })
  }

  const onSignIn = () => {
    console.log('Hello')
  }

  const onSignOut = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      
      <Router>
        {loggedIn ? <Navbar onSignOut={onSignOut}/> : <SignInNavbar/>}
        <Switch>
          <Route exact path="/signin" render={(loggedIn) => <SignIn onSignIn={onSignIn}/>}></Route>
          <Route exact path="/home" component={HomeTeacher}></Route>
          <Route exact path="/assignments" component={Assignments}></Route>
          <Route exact path="/assignments/create" component={CreateAssignment}></Route>
          <Route exact path="/assignments/correct" component={CorrectAssignment}></Route>
          <Route exact path="/groups" component={Groups}></Route>
          <Route exact path="/group" component={Group}></Route>
          <Route exact path="/statistics" component={Statistics}></Route>
          <Route exact path="/student" component={Student}></Route>
          <Route path="/">
              <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
      {/* <HomeTeacher/>
      <Statistics/> */}
    </div>
  );
}

export default App;
