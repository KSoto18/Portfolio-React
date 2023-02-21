import React from 'react';


import ReactDOM from 'react-dom';

import { Title, App } from './App';


ReactDOM.render(<Title />, document.getElementById('root'));

// setTimeout(() => {
//     ReactDOM.render(<OpeningTitle />, document.getElementById('root'))
// }, 5000)

setTimeout (() => {
    ReactDOM.render(<App />, document.getElementById('root'))
}, 10000)

