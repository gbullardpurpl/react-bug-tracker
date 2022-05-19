import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Views/Login/loginForm';
//import ViewBugPage from './Views/BugCard/bugCard';

const App = () => {
  const {auth} = useSelector(state => state);
  return (
    <>
      {
        !auth.loggedIn ?
        <LoginForm /> : 
        <h1 className="not-logged-in">Hello</h1>
      }
    </>
  );
}

export default App;
