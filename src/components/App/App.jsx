import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import AdminPage from '../AdminPage/AdminPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddChildPage from '../AddChildPage/AddChildPage';
import AddTeacherPage from '../AddTeacherPage/AddTeacherPage';
import DailyFormPage from '../DailyFormPage/DailyFormPage';
import TeacherPage from '../TeacherPage/TeacherPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            {(user.role === "teacher") ?
              // If the user is logged in as a teacher, 
              // redirect them to the teacher page
              
              <Redirect to="/teacher" />
              
              :
              // Otherwise, show the user page
              (user.role === "admin") ?

                <Redirect to="/admin" /> :
              
                <UserPage />
              
            }
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AddChildPage else shows LoginPage
            exact
            path="/addchild"
          >
            <AddChildPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AddTeacherPage else shows LoginPage
            exact
            path="/addteacher"
          >
            <AddTeacherPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows DailyForm else shows LoginPage
            exact
            path="/dailyform"
          >
            <DailyFormPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows TeacherPage else shows LoginPage
            exact
            path="/teacher"
          >
            <TeacherPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/admin"
          >
            <AdminPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
