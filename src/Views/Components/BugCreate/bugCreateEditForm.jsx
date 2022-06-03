import React, { useState } from 'react';
import BugModel from '../../../Models/bugModel';

import './bugCreateEditForm.css';

const CreateEditBugForm = (props) => {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e) {
        setBugObject({
            ...bugObject,
            [e.target.bugname]: e.target.value,
        });
    }
    return (
        <div className="bug-create-edit">
            {props.title === "Edit Bug" && <button className="close-button" onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>
            <form>                
                <label for="bugname">Name:</label>
                <input type="text" name="bugname" id="bugname" placeholder="Bug Name" onBlur={inputChanged} value={bugObject.bugname} required />
                <label for="details">Details:</label>
                <textarea name="details" id="details" rows="3" onBlur={inputChanged} value={bugObject.details} required></textarea>
                <label for="details">Steps:</label>
                <textarea name="steps" id="steps" rows="3" onBlur={inputChanged} value={bugObject.steps} required></textarea>
                <label for="priority">Priority:</label>
                <select name="priority" id="priority" onChange={inputChanged} value={bugObject.priority} required>
                    <option value="">Select Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <label for="assigned">Assigned:</label>
                <select name="assigned" id="assigned" onChange={inputChanged} value={bugObject.assigned} required>
                    <option value="">Select Assigned</option>
                    <option value="Dan Yell">Dan Yell</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Dough">Jane Dough</option>
                </select>
                <label for="version">Steps:</label>
                <input type="text" name="version" id="version" placeholder="Application Version" onBlur={inputChanged} value={bugObject.version} required />
                <button type="submit">{props.title}</button>
            </form>
        </div>
    );
}

export default CreateEditBugForm;