import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Signup from '../pages/signup';
import UserProfile from '../pages/user';



function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/UserProf' element={<UserProfile/>} />
        </Routes>
    )
}

export default Rutas;
