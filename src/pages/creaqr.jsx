//import {useRef, useState} from 'react';
import '../styles/styleSignup.css'
import {Outlet, useNavigate} from "react-router-dom";
//import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import QRCode from 'react-qr-code';
import Cookies from 'universal-cookie';
import { IoMdArrowRoundBack } from 'react-icons/io';
import MenuOpci from '../Componentes/MenuOp';
//import { TraeQR } from '../ConectionSQL/conexion';
//import users from '../pages/users.json'
//<TraeQR rut={cock.get('Data').rut}/>


function CreaQR(){
    let cock = new Cookies();
    const navigate = useNavigate();
    const datos = cock.get('qrbici');
    return(
        <div className='bodyQR'>
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="welcome">
                                    <div className="welcome">
                                        <h2 className="Titulo">
                                            Crear codigo<br/> 
                                            QR
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contentQR-form">
                            <div className="y-style">
                                <div className='QR'>
                                    
                                    <QRCode className='QRcode' value={datos.rut_e+"=="+datos.id_t} size={230} bgColor="#002aff" fgColor="#fff" level="H" />
                                </div>
                                <button 
                                    onClick={
                                        ev=>{
                                            /*Boton para volver*/
                                            ev.preventDefault();
                                            cock.remove('qrbici');
                                            navigate('/bicis');//eso redirige a la ruta especificada
                                        }
                                    }
                                    onMouseOver={(e) => e.target.title = 'Volver'} 
                                    id='BtnLogIn' className="GoBack QR centrado" type="sumbit">
                                    <IoMdArrowRoundBack size={60}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuOpci/>
            </div>
            <Outlet/>
        </div>
    );
}

export default CreaQR;