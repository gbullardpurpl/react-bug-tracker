import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../Controllers/Redux/authSlice';

import './sideBar.css';

const SideBar = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    function logOut() {
        dispatch(signOut());
    }

    return (
        <div className="sidebar">
            <Link className="nav-link" to="/">
                <h1 className="brand">Bug Tracker</h1>
            </Link>
            <ul>
                <li><Link className="nav-link" to="/">Dashboard</Link></li>
                <li><Link className="nav-link" to="/viewbugs">View Bugs</Link></li>
                {auth.admin && // If admin only
                    <li><Link className="nav-link" to="/createbug">Create Bug</Link></li>
                }
            </ul>
            <button className="nav-link logout" onClick={logOut}>Logout</button>
        </div>
    );
}

export default SideBar;