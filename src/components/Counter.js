import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ startingNumber = 0 }) => {
    const [count, setCount] = useState(startingNumber);

    return (
        <div className="Counter">
            <button className="Counter__button" onClick={() => setCount(count + 1)}>
                +
            </button>
            <div className="Counter__count">{count}</div>
            <button className="Counter__button" onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
};

export default Counter;
