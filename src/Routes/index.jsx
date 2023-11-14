import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Signup from '../pages/signup';
import Check from '../pages/check';
import UserProfile from '../pages/user';


function check(){
    let tokken = localStorage.getItem('Tokken');
    console.log(tokken);
    try{
        if (tokken === true){
            console.log('aceptado')
            return(<UserProfile/>);
        }else{
            return(<Login/>);
        }
    }catch(e){
        console.log('Error: '+String(e));
    }
    
}

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
