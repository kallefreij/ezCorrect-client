import React from 'react';
import logo from './logo.svg';
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
import Groups from './teacher/groups/components/groups';
import Group from './teacher/groups/components/group';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={HomeTeacher}></Route>
          <Route exact path="/assignments" component={Assignments}></Route>
          <Route exact path="/groups" component={Groups}></Route>
          <Route exact path="/group" component={Group}></Route>
          <Route exact path="/statistics" component={Statistics}></Route>
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
