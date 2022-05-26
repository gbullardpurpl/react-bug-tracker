import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../Components/BugCard/bugCard';
import BugView from '../Components/BugView/bugView';

const ViewBugsPage = () => {
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        bugname: "",
        isDisplayed: false,
    });
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length > 1]); // eslint-disable-line react-hooks/exhaustive-deps

    function BugClicked(bugname) {
        SET_DISPLAY_BUG({
            isDisplayed: !DISPLAY_BUG.isDisplayed,
            bugname: bugname,
        });
    }

    return (
        <div className="page-container">
            {bugs.map((bug, key) => (
                <BugCard key={key} bug={bug} clicked={BugClicked} />
            ))}
            {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={
                bugs.filter(
                    (bug) => bug.bugname === DISPLAY_BUG.bugname
                )[0]
            } />}
        </div>
    );
}

export default ViewBugsPage;