import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import ViceProvider from './context/ViceProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <ViceProvider>
            <App />
        </ViceProvider>
    </BrowserRouter>, document.getElementById('root'))
