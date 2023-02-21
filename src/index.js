// Main Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Components/Functions
import { Title, App, NoTitle } from './App';


ReactDOM.render(<Title />, document.getElementById('root'));

setTimeout(() => {
    ReactDOM.render(<NoTitle/>, document.getElementById('root'))
}, 5000)

setTimeout (() => {
    ReactDOM.render(<App />, document.getElementById('root'))
}, 6500)

