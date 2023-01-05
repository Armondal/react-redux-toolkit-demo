import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
    const [cakesRestoked, setCakesRestoked] = useState(1);
    const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <input
                type="number"
                value={cakesRestoked}
                onChange={(e) => setCakesRestoked(parseInt(e.target.value))}
                min={0}
                max={1000}
            />
            <button onClick={() => dispatch(restocked(cakesRestoked))}>
                Restock Cakes
            </button>
        </div>
    );
};
