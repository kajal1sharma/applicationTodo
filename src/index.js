import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TextHOC from './Context/TextContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TextHOC App={App}/>

);


