import React from 'react';
import CreateBugForm from '../Components/BugCreate/bugCreateForm';

const ViewCreateBugPage = (props) => {
    return (
        <div className="page-container">            
            <CreateBugForm title={props.title} />
        </div>
    );
}

export default ViewCreateBugPage;