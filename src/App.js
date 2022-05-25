import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './Views/Login/loginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Views/SideBar/sideBar';
import ViewDashboardPage from './Views/Pages/viewDashboard';
import ViewBugsPage from './Views/Pages/viewBugs';
import ViewCreateBugPage from './Views/Pages/createBug';

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
              <Route path="/" element={<ViewDashboardPage />} />
              <Route path="viewbugs" element={<ViewBugsPage />} />
              <Route path="createbug" element={<ViewCreateBugPage />} />
            </Routes>            
        </>
      }
    </Router>
  );
}

export default App;
