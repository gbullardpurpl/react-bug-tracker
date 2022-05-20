import React from 'react';

import './bugCard.css';

const BugCard = (props) => {
    const {name, priority, version} = props.bug;
    function Clicked() {
        props.Clicked(props.name);
    }
    return (
        <div className="bug-card" onClick={Clicked}>
            <h2 className="bug-name">{name}</h2>
            <h4 className="bug-priority">{priority}</h4>
            <h5 className="bug-version">{version}</h5>
        </div>
    );
};

export default BugCard;