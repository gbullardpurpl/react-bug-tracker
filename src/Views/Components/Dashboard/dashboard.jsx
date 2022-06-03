import React from 'react';
import Priority from '../../../Controllers/priorityController'

import './dashboard.css';

const ViewDashboard = (props) => {
    const {level, color} = Priority(props.priority);

    return (
        <div className="dashboard-panel" onClick={props.clicked} style={{color: color}}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    );
}

export default ViewDashboard;