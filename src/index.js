import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

// #TODO 
/**
 *  TODO:
 * - link header and footer 
 * - component single course page
 * 
 *  TOCREATE:
 * - exam page
 * - user Profile page
 * - paly videos page 
 * - couse deatil
 *  
 *  FIXME:
 * - fix the nav bar
 */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
        </BrowserRouter>
);

