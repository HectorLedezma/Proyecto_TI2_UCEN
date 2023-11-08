import React, { useState } from "react";
import "../styles/styleSignup.css";
import { Link, Outlet} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiHide, BiShow, BiUser } from "react-icons/bi";


function Signup(){
    const cambio = (ojo) => {
        if(ojo === 'BiShow'){
            setEye(
                <BiHide className="clickeable" fontSize='30'
                    onClick={()=>cambio('BiHide')}
                />);
            setPass('text');
            
        }else{
            setEye(
                <BiShow id='show' className="clickeable" fontSize='30'
                    onClick={()=>cambio('BiShow')}
                />
            );
            setPass('password');
            
        }
    }

    const cambio2 = (ojo) => {
        if(ojo === 'BiShow'){
            setEye2(
                <BiHide className="clickeable" fontSize='30'
                    onClick={()=>cambio2('BiHide')}
                />);
            setPass2('text');
            
        }else{
            setEye2(
                <BiShow id='show' className="clickeable" fontSize='30'
                    onClick={()=>cambio2('BiShow')}
                />
            );
            setPass2('password');
            
        }
    }

    const [pass,setPass] = useState('password');
    const [eye,setEye] = useState(
        <BiShow className="clickeable" fontSize='30'
            onClick={()=>cambio(eye.type.name)}
        />
    );
    const [pass2,setPass2] = useState('password');
    const [eye2,setEye2] = useState(
        <BiShow className="clickeable" fontSize='30'
            onClick={()=>cambio2(eye.type.name)}
        />
    );

    return(
        <div id="page" className="site login-show">
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="welcome">
                                    <div className="welcome">
                                        <h2 className="Titulo">
                                            Datos de<br/> 
                                            la cuenta
                                        </h2>
                                    </div>
                                    <div className="logo">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input className="userInputText" type="email" placeholder="Ingresa tu nombre"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input className="userInputText" type="email" placeholder="Ingresa tu apellido"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineMail fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input className="userInputText" type="email" placeholder="Ingresa tu correo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input className="userInputText" type={pass} placeholder="Ingresa tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input className="userInputText" type={pass2} placeholder="Repite tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye2}
                                            </div>
                                        </div>
                                    </div>
                                    <p><button className="Iniciar" type="sumbit">Crear cuenta</button></p>
                                </form>
                                <div className="afterform">
                                    <p>¿Ya tienes una cuenta?</p>
                                    {/**<a onClick={toSignup} className="t-signup">Registrate</a> */}
                                    <Link to='/'>Inicia sesion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="logo"><a href=""><span></span></a></div>
                                <div className="welcome">
                                    <h2>Registrate<br/>Ahora </h2>
                                    <p>Estacionamiento QR para bicicletas</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <p>
                                        <label>Nombre completo</label>
                                        <input type="text" placeholder="Ingresa tu nombre completo"/>
                                    </p>
                                    <p>
                                        <label>Correo</label>
                                        <input type="email" placeholder="Ingresa tu correo"/>
                                    </p>
                                    <p>
                                        <label>Contraseña</label>
                                        <input type="password" placeholder="Ingresa tu contraseña"/>
                                    </p>
                                    <p><button type="sumbit">Registrarse</button></p>
                                </form>
                                <div className="afterform">
                                    <p>¿Ya tienes una cuenta?</p>
                                    
                                    {/*<a href="" className="t-login">Inicia Sesion</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Signup