import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import ViewDashboard from '../Components/Dashboard/dashboard';

const ViewDashboardPage = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs);
    const navigate = useNavigate();

    let highCount = 0
    let midCount = 0
    let lowCount = 0

    if (bugs !== undefined) {
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority) {
        return bugs.filter((bug) => {return bug.priority === priority})
    }

    function redirect() {
        navigate('/viewbugs');
    }

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs === undefined, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="page-container">
            <ViewDashboard priority="1" count={highCount.length} clicked={redirect} />
            <ViewDashboard priority="2" count={midCount.length} clicked={redirect} />
            <ViewDashboard priority="3" count={lowCount.length} clicked={redirect} />
        </div>
    );
}

export default ViewDashboardPage;