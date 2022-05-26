import React from 'react';
import BugViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/Redux/bugSlice'

import './bugView.css';

const BugView = (props) => {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    return (
        <div className="bug-view">
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