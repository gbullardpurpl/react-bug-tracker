import React from 'react';

import './bugViewSection.css';

const BugViewSection = (props) => {
    return (
        <div className="bug-view-section">
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    )
}

export default BugViewSection;