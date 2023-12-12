import {react, useRef, useState, useEffect} from 'react';
import { Link, Outlet, useNavigate} from "react-router-dom";
import { conexion } from "../ConectionSQL/conexion";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from "./heading";
import '../styles/profile.css'
import UserMenu from './UserMenu';
import "../styles/styleUser.css"
import { IoSchoolOutline } from "react-icons/io5";
import { TbWorldHeart } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";

function UserProfile() {
    const navigate = useNavigate();

    return(
        <div id="page" className="site login-show">
            
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <Heading wel={
                            (
                                <div>
                                <h1>Perfil de<br/>Usuario</h1>
                                    {/* Contenido del perfil del usuario */}
                                    <UserMenu userData={JSON.parse(sessionStorage.getItem('dataUser'))}/>
                                </div>
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

                                <div className="linksContainer">
                                    <div className='userInput'>
                                        <div className="userInputContent">
                                            <div className="InputSide centrado">
                                            <IoSchoolOutline size={25} style={{ marginRight: '10px' }}/>
                                            <a
                                                href="https://aula2023.ucentral.cl/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Aula Virtual Ucen 2023
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='userInput'>
                                    <div className="userInputContent">
                                    <div className="InputSide centrado">
                                    <TbWorldHeart size={25} style={{ marginRight: '10px' }} />
                                        <a
                                        href="https://miucen.ucentral.cl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Portal Ucen
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                <div className="userInput">
                                    <div className="userInputContent">
                                    <div className="InputSide centrado">
                                    <TbCalendarTime size={25} style={{ marginRight: '10px' }} />
                                        <a
                                        href="http://servicios.ucentral.cl/horarioAlumno/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Horario Alumnos Ucen
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                <div className="userInput">
                                    <div className="userInputContent">
                                    <div className="InputSide centrado">
                                    <FaUniversity size={25} style={{ marginRight: '10px' }} />
                                        <a
                                        href="https://www.ucentral.cl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Pagina Oficial Universidad Central
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                        <button 
                                            onClick={
                                                ev=>{
                                                    /*Boton para volver*/
                                                    ev.preventDefault();
                                                    sessionStorage.clear();
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