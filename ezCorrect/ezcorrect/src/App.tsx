import './App.css';
import HomeTeacher from './teacher/home/components/home';
import Navbar from './common/navbar/navbar';
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
import StartHome from './start/home';
import { Component } from 'react';

function App() {
  return (
    <div>
      <Router> 
        <Switch>
          <Route path="/teacher/">
            <Navbar/>
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
          <Route exact path="/home" component={StartHome}></Route>
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
