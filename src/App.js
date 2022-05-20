import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Views/Login/loginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './Views/SideBar/sideBar';
//import ViewBugPage from './Views/BugCard/bugCard';

const App = () => {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {
        !auth.loggedIn ?
        <LoginForm /> : 
        <>
          <SideBar />
        </>
      }
    </Router>
  );
}

export default App;
