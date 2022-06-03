import React from 'react';
import CreateEditBugForm from '../Components/BugCreate/bugCreateEditForm';

const ViewCreateEditBugPage = (props) => {
    return (
        <div className="page-container">            
            <CreateEditBugForm title={props.title} />
        </div>
    );
}

export default ViewCreateEditBugPage;