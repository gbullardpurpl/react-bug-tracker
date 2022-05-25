import React from 'react';
import PriorityController from '../../Controllers/priorityController';

import './bugCard.css';

const BugCard = (props) => {
    const { bugname, priority, version } = props.bug || {};
    const { level, color } = PriorityController(priority);
    function Clicked() {
        props.Clicked(bugname);
    }
    return (
        <div className="bug-card" onClick={Clicked} style={{color:color}}>
            <h2 className="bug-name">{bugname}</h2>
            <h4 className="bug-priority">{level}</h4>
            <h5 className="bug-version">{version}</h5>
        </div>
    );
};

export default BugCard;