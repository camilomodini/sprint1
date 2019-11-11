import React from 'react';
import './App.css';
import Container from './Componentes/Container';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Login from './Componentes/Login';
import CreateAcount from './Componentes/CreateAcount';
import Cities from './Componentes/Cities';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';




function App() {
    return ( <
        BrowserRouter >
        <
        div >
        <
        div > < Header > < /Header>;</div >

        <
        Route exact path = '/'
        component = {
            Container
        }
        /> <
        Route path = '/login'
        component = {
            Login
        }
        /> <
        Route path = '/createacount'
        component = {
            CreateAcount
        }
        /> <
        Route path = '/container'
        component = {
            Container
        }
        /> <
        Route path = '/cities'
        component = {
            Cities
        }
        />

        <
        br / >

        <
        div > < Footer > < /Footer></div >
        <
        /div> < /
        BrowserRouter >


    );
}

export default App;