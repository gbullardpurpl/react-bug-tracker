import React, { useEffect, useRef } from 'react';
import BugViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/Redux/bugSlice'

import './bugView.css';

const BugView = (props) => {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);
    const modalRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return function cleanup() {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
        // eslint-disable-next-line
    }, []);

    function handleClickOutside(event) {
        if (modalRef && !modalRef.current.contains(event.target)) {
            props.clicked();
        }
    }

    return (
        <div className="bug-view" ref={modalRef}>
            <button className="close-button" onClick={props.clicked}>Close</button>
            <h2>{bug.bugname}</h2>
            <BugViewSection title="Details" info={bug.details} />
            <BugViewSection title="Steps" info={bug.steps} />
            <BugViewSection title="Priority" info={bug.priority} />
            <BugViewSection title="Creator" info={bug.creator} />
            <BugViewSection title="App Version" info={bug.version} />
            <BugViewSection title="Time Created" info={bug.time} />
            <p><button onClick={() => {dispatch(markComplete())}}>Mark Complete</button></p>
        </div>
    )
}

export default BugView;