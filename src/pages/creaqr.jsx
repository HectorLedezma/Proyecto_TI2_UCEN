import {react, useRef, useState} from 'react';
import '../styles/styleSignup.css'
import { Link, Outlet} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import QRCode from 'react-qr-code';
import users from '../pages/users.json'


function traeUser(key){
    let output = "";
    if(key in users){
        output = String('Bici de '+users[key].Nombre+' '+users[key].Apellido);
    }else{
        output = "www.google.cl"
    }
    return output;
}

function CreaQR(){
    let correo = useRef();

    const [QRv,setqr] = useState("");

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
                                        <div className="userInput">
                                            <div className="userInputContent">
                                                <div className="IconSide centrado">
                                                    <AiOutlineMail fontSize='30'/>
                                                </div>
                                                <div className="InputSide centrado">
                                                    <input
                                                        className="userInputText"
                                                        onChange={
                                                            ev => {
                                                                ev.preventDefault();
                                                                setqr(correo.current.value);
                                                            }
                                                        }
                                                    ref={correo} type="email" placeholder="Ingresa tu correo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <QRCode className='' value={traeUser(QRv)} size={280} bgColor="#002aff" fgColor="#fff" level="H" />
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