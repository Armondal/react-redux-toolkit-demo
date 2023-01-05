import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restocked} from './icecreamSlice';
export const IcecreamView = () => {
    const numberOfIcecream = useSelector(
        (state) => state.icecream.numberOfIcecreams
    );
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of icecreams - {numberOfIcecream} </h2>
            <button onClick={() => dispatch(ordered())}> Order icecream</button>
            <button onClick={() => dispatch(restocked(5))}>restoke icecreams</button>
        </div>
    );
};
