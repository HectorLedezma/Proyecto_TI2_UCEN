import {react, useRef, useState, useEffect} from 'react';
import { Link, Outlet, useNavigate} from "react-router-dom";
import { conexion } from "../ConectionSQL/conexion";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from "./heading";
import '../styles/profile.css'
function UserProfile(){
    const navigate = useNavigate();



    return(
        <div id="page" className="site login-show">
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <Heading wel={
                            (
                                <h2>
                                    Hola<br/> 
                                    {"[Nombre de usuario]"}
                                </h2>
                            )
                        } 
                        logo1={<div/>} 
                        logo2={<div/>}/>
                        <div className="content-form">
                            <div className="y-style">
                                {/*Espacio para componentes */}
                                <form action="" >
                                    {/*Espacio para Inputs */}
                                </form>
                                {/*Espacio para componentes */}
                                <div className="afterform">
                                <div className='welcome'>
                                        
                                        <button 
                                            onClick={
                                                ev=>{
                                                    /*Boton para volver*/
                                                    ev.preventDefault();
                                                    navigate('/');//eso redirige a la ruta especificada
                                                }
                                            }
                                            onMouseOver={(e) => e.target.title = 'Volver'} 
                                        id='BtnLogIn' className="GoBack centrado" type="sumbit">
                                            <IoMdArrowRoundBack size={60}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Outlet/>
        </div>
    );
    
}

export default UserProfile;