import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/bugCard';

const ViewBugs = () => {
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length > 1]);

    return (
        <div className="page-container">
            {bugs.map((bug,key) => (
                <BugCard key={key} props={bug} />
            ))}
        </div>
    );
}

export default ViewBugs;