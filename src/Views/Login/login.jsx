import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';

import './login.css';

const Loginform = () => {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name: "",
        password: "",
    });

    function inputChanged(e) {
        setFormInput({
            ...formInput, 
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        dispatch(signIn({ formInput }));
        e.preventDefault();
    }

    return (
        <div className="loginbg">
            <h1>Login:</h1>
            <form className="login-panel">
                <input type="text" name="name" placeholder="Name" onchange={inputChanged} value={formInput.name} />
                <input type="password" name="password" placeholder="Password" onchange={inputChanged} value={formInput.password} />
                <button type="submit" onClick={submit}>Login</button>
            </form>
        </div>
    );
}

export default Loginform;