import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Signup from '../pages/signup';
import UserProfile from '../pages/user';
import CreaQR from '../pages/creaqr';
import Recupera from '../pages/recover';
import Recuperado from '../pages/recoverOK';
import Sigbici from '../pages/sigbici';
import Crud from '../pages/crud';

function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/UserProf' element={<UserProfile/>} />
            <Route path='/qrCode' element={<CreaQR/>} />
            <Route path='/recover' element={<Recupera/>} />
            <Route path='/recoverOk' element={<Recuperado/>} />
            <Route path='/sigbici' element={<Sigbici/>} />
            <Route path='/crud' element={<Crud/>} />
        </Routes>
    )
}

export default Rutas;
