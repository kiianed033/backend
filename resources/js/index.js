import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login'
import About  from './pages/about'
import Layout from './containers/Layout';
import User  from './pages/user'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function Index() {
    return (
        <Router>
            <Routes>
                <Route path='/about' element={<About />}/>
                <Route path='/users' element={<User />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<Layout />} />
            </Routes>
        </Router>
    );
}
export default Index;
// DOM element
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}