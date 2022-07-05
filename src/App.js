import React from "react";
import "./style.global.css";

import Counter from "./components/Counter";

const App = () => {
    return (
        <>
            <h1>Hello, World!</h1>
            <p>
                Change <code>src/App.js</code> to see changes reflected in the browser.
            </p>
            <Counter />
        </>
    );
};

export default App;
