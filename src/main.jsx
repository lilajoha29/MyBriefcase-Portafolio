import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { App } from './App'
import './index.css'

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
