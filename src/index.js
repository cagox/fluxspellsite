import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './css/normalize.css';
import './css/skeleton.css';
import './css/base.css';
import './css/linkbutton.css';

ReactDOM.render(
    <div>
        {/* Possibly add header here */}
        <App />
        {/* Add footer here */}
    </div>
    ,
    document.getElementById('root')
);
