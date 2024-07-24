import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter,  } from 'react-router-dom';
import Navbar from './componets/UI/Navbar/Navbar';
import AppRouter from './componets/AppRouter';

ReactDOM.render(
    <BrowserRouter>
    <Navbar />
 <AppRouter/>
</BrowserRouter>,
    document.getElementById('root')
);
