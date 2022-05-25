import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/bugCard';

const ViewBugsPage = () => {
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length > 1]); // eslint-disable-line react-hooks/exhaustive-deps

    function BugClicked(bugname) {
        
    }

    return (
        <div className="page-container">
            {bugs.map((bug, key) => (
                <BugCard key={key} bug={bug} clicked={BugClicked} />
            ))}
        </div>
    );
}

export default ViewBugsPage;