import { useContext } from 'react';
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext';

const Counter = ({ id, options, counter }) => {
    const { dispatchData } = useContext(AppContext);
    const { groupId, incrementBy } = options;
    const { value } = counter;

    const handleAdd = () => {
        dispatchData({ type: 'INCREMENT', payload: { groupId, id, incrementBy, prevValue: value } });
    };
    const handleSubtract = () => {
        dispatchData({ type: 'DECREMENT', payload: { groupId, id, incrementBy, prevValue: value } });
    };

    const [count, setCount] = useState(0);
    const [begin, setBegin] = useState(false);
    const intervalRef = useRef(null);
    const handleClick = () => setBegin((prev) => !prev);

    useEffect(() => {
        if (begin) {
            const intervalId = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
            intervalRef.current = intervalId;
        } else {
            setCount(0);
            intervalRef?.current && clearInterval(intervalRef.current);
        }
    }, [begin]); console.log(count);


    return (
        <div className="Counter border-top border-primary mx-auto shadow my-2">
            <div className="mb-1">
                <div className='btns'>
                    <button onClick={handleClick}>Start</button>
                    <button onClick={handleClick}>Stop</button>
                </div>
                <div className="value"> {count} </div>
            </div>
            <div className="d-flex justify-content-between">
                <button onClick={handleSubtract}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className="value"> {value} </div>
                <button onClick={handleAdd}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};


export default Counter;