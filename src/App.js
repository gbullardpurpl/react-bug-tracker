import React from 'react';
import { useSelector } from 'react-redux';
import Loginform from './Views/Login/login';

const App = () => {
  const {auth} = useSelector(state => state);
  return (
    <>
      {
        !auth.loggedIn ?
        <Loginform /> : 
        <h1 className="not-logged-in">Hello</h1>
      }
    </>
  );
}

export default App;
