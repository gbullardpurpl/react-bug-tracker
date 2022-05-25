import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Views/Login/loginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Views/SideBar/sideBar';
import ViewBugsPage from './Views/Pages/viewBugs';

const App = () => {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {
        !auth.loggedIn ?
        <LoginForm /> : 
        <>
            <SideBar />
            <Routes>
              <Route path="viewbugs" element={<ViewBugsPage />} />
            </Routes>            
        </>
      }
    </Router>
  );
}

export default App;
