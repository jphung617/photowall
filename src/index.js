import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Styles/stylesheet.css';
import Main from './Components/Main.js';
import {BrowserRouter} from 'react-router-dom';





ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><Main/></BrowserRouter>, document.getElementById('root'));
