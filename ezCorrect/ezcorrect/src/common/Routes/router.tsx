import React, { useEffect, useState } from 'react';
import ProtectedRoute from './protectedRoute';
import HomeTeacher from '../../teacher/home/components/home';
import Statistics from '../../teacher/statistics/components/statistics';
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import TeacherAssignments from '../../teacher/assignments/components/assignments';
import CreateAssignment from '../../teacher/assignments/components/create-assignment/createAssignment';
import Groups from '../../teacher/groups/components/groups';
import Group from '../../teacher/groups/components/group';
import Student from '../../teacher/student/components/student';
import CorrectAssignment from '../../teacher/assignments/components/correct-assignment/correctAssignment';
import SignIn from '../signIn/signIn';
import SignUp from '../signup/signup';
import Confirm from '../signup/confirm';
import StartHome from '../../start/home';
import Navbar from '../navbar/navbar';
import StudentHome from '../../student/home/components/home';
import StartAssignment from '../../student/assignments/components/startAssignment';
import StudentAssignments from '../../student/assignments/assignments';
import NotificationSnackbar from '../ezSnackbar/notificationSnackbar';

interface RouterProps {
  loggedIn: boolean;
  teacherAuth: boolean;
  studentAuth: boolean;
  userEmail: string;
  onSignIn(): void;
  onSignOut(): void;
  onSignUp(email: string): void;
  onConfirm(): void;
}



const Router: React.FC<RouterProps> = (props) => {
  return (
    <BrowserRouter>
      <NotificationSnackbar />
      {props.loggedIn && <Navbar onSignOut={props.onSignOut}/>}
      <Switch>
        <ProtectedRoute exact path="/teacher/home" isAuthenticated={props.loggedIn && props.teacherAuth} component={HomeTeacher} />
        <ProtectedRoute
          exact
          path="/teacher/assignments"
          isAuthenticated={props.loggedIn && props.teacherAuth}
          component={TeacherAssignments}
        />
        <ProtectedRoute
          exact
          path="/teacher/assignments/create"
          isAuthenticated={props.loggedIn && props.teacherAuth}
          component={CreateAssignment}
        />
        <ProtectedRoute
          exact
          path="/teacher/assignments/correct"
          isAuthenticated={props.loggedIn && props.teacherAuth}
          component={CorrectAssignment}
        />
        <ProtectedRoute exact path="/teacher/groups" isAuthenticated={props.loggedIn && props.teacherAuth} component={Groups} />
        <ProtectedRoute exact path="/teacher/group" isAuthenticated={props.loggedIn && props.teacherAuth} component={Group} />
        <ProtectedRoute exact path="/teacher/statistics" isAuthenticated={props.loggedIn && props.teacherAuth} component={Statistics} />
        <ProtectedRoute exact path="/teacher/student" isAuthenticated={props.loggedIn && props.teacherAuth} component={Student} />
        <ProtectedRoute exact path="/teacher/profile" isAuthenticated={props.loggedIn && props.teacherAuth} component={Student} />

        <ProtectedRoute exact path="/student/home" isAuthenticated={props.loggedIn && props.studentAuth} component={StudentHome} />
        <ProtectedRoute
          exact
          path="/student/assignment/start"
          isAuthenticated={props.loggedIn && props.studentAuth}
          component={StartAssignment}
        />
        <ProtectedRoute
          exact
          path="/student/assignments"
          isAuthenticated={props.loggedIn && props.studentAuth}
          component={StudentAssignments}
        />
        <Route exact path="/home" render={() => <StartHome />} />
        <Route exact path="/signin" render={() => <SignIn onSignIn={props.onSignIn} />} />
        <Route exact path="/signup" render={() => <SignUp onSignUp={props.onSignUp} />} />
        <Route exact path="/confirm" render={() => <Confirm email={props.userEmail} onConfirm={props.onConfirm} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
