//import {useRef, useState} from 'react';
import '../styles/styleSignup.css'
import { Link, Outlet} from "react-router-dom";
//import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import QRCode from 'react-qr-code';
//import users from '../pages/users.json'


function CreaQR(){
    
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
                                <form action="">
                                    <div className="logo">
                                        
                                    </div>
                                    <QRCode className='' value={sessionStorage.getItem('Mail')} size={280} bgColor="#002aff" fgColor="#fff" level="H" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default CreaQR;