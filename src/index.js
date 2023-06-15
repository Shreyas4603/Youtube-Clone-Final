import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

var c=0

if(c===0){console.log(c,"Started") ;
c=c+1}

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
