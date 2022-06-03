import React from 'react';

import './bugEditDelete.css';

const EditDeleteBug = (props) => {
    return (
        <div className="edit-panel">
            <button onClick={props.editClicked}>Edit</button>
            <button onClick={props.deleteClicked}>Delete</button>
        </div>
    );
}

export default EditDeleteBug;