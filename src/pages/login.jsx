import React from "react";
import "../styles/style.css";
import LogoU from '../images/ucen_trans.png'
import LogoCleta from '../images/QRcleta.png'
/*
const signup = document.querySelector('.t-signup');
const login = document.querySelector('.t-login');
const addclass = document.querySelector('.site');
signup.addEventListener('click',function(){
    addclass.className = 'site signup-show';
});
login.addEventListener('click',function(){
    addclass.className = 'site login-show';
});
*/
function Login(){
    return(
        <div id="page" class="site login-show">
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="logo">
                                    <img src={LogoU} alt="Logo" height="80"></img>
                                </div>
                                <div className="welcome">
                                    <h2>
                                        Estacionamiento QR<br/> 
                                        para bicicletas
                                    </h2>
                                </div>
                                <div className="logo">
                                    <img src={LogoCleta} alt="Logo" height="180"></img>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <p>
                                        <label>Correo</label>
                                        <input type="email" placeholder="Ingresa tu correo"/>
                                    </p>
                                    <p>
                                        <label>Contraseña</label>
                                        <input type="password" placeholder="Ingresa tu contraseña"/>
                                    </p>
                                    <p className="check">
                                        <label for="remember">Recuérdame</label>
                                        <input type="checkbox" id="remember"/>
                                    </p>
                                    <p class="forgot"><a href="#">Recuperar contraseña</a></p>
                                    <p><button type="sumbit">Iniciar sesión</button></p>
                                </form>
                                <div className="afterform">
                                    <p>¿No tienes una cuenta?</p>
                                    <a href="" class="t-signup">Registrate</a>
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
                                    <a href="#" class="t-login">Inicia Sesion</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;