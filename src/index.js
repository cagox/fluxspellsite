import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {AppContextProvider} from './AppContext.js';

import './css/grid.css';
import './css/base.css';
import './css/linkbutton.css';

ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
    ,
    document.getElementById('root')
);
