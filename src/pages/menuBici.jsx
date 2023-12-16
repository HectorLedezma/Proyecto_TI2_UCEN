import {/*Navigate,*/ Outlet, useNavigate} from "react-router-dom";
//import { conexion } from "../ConectionSQL/conexion";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from "../Componentes/heading";
import UserMenu from '../Componentes/UserMenu';
import "../styles/styleUser.css"
import Cookies from 'universal-cookie';
import { ListaBici } from "../ConectionSQL/conexion";
//import { MdPedalBike } from 'react-icons/md';
//import { useState } from "react";


function BikeMenu() {
    const navigate = useNavigate();
    let cock = new Cookies();
    //const bicis = TraeData(navigate);
    return(
        <div id="page" className="site login-show">
            
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <Heading wel={
                            (
                                <div>
                                    <h1 className="clrWhite">Bicis de<br/>Usuario</h1>
                                    {/* Contenido del perfil del usuario */}
                                </div>
                            )
                        } 
                        logo1={<div/>} 
                        logo2={<UserMenu userData={cock.get("Datos")}/>}/>
                        <div className="content-form">
                            <div className="y-style">
                                {/*Espacio para componentes */}
                                <div>
                                    <ListaBici rut={cock.get('Datos').rut}/>
                                </div>
                                <button onClick={
                                    ev=>{
                                        ev.preventDefault();
                                        navigate('/sigbici')
                                    }
                                } id='BtnLogIn' className="clrWhite Iniciar InputSide">
                                    Registrar Bici
                                </button>

                                <button 
                                    onClick={
                                        ev=>{
                                            /*Boton para volver*/
                                            ev.preventDefault();
                                            cock.remove('BiciData');
                                            navigate('/UserProf');//eso redirige a la ruta especificada
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
            <Outlet/>
        </div>
    );
}

export default BikeMenu;