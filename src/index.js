import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <div className="navbar"></div>
        <div className='navbar__links'>
    <a href='/about'>О сайте</a>
    <a href='/posts'>Посты</a>
    </div>
    <App/>
</BrowserRouter>,
    document.getElementById('root')
);
