import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Finds <div id = root> in index.html and creates a root node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
