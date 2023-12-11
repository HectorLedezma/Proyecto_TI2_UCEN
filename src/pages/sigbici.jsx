import React, { useRef } from "react";
import { useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Sigbici = ({ onRegister }) => {
    const model = useRef(null);
    const color = useRef(null);
    const año = useRef(null);
    const serial = useRef(null);
    const navigate = useNavigate();


return (
    <div id="page" className="site login-show">
    <div className="container">
        <div className="wrapper">
        <div className="login">
            <div className="content-heading">
            <div className="y-style">
                <div className="welcome">
                    <h2 className="Titulo">
                        Registrar <br/> 
                        Bicicleta
                    </h2>
                    <div className="logo"></div>
                </div>
            </div>
            </div>
            <div className="content-form">
                <div className="y-style">
                    <form action="">
                        <div className="userInput">
                            <div className="userInputContent">
                                <div className="InputSide centrado">
                        <input
                            ref={model}
                            className="userInputText"
                            type="text"
                            placeholder="Modelo"
                        />
                                </div>
                            </div>
                        </div>
            <div className="userInput">
                <div className="userInputContent">
                    <div className="InputSide centrado">
                        <input
                            ref={color}
                            className="userInputText"
                            type="color"
                            placeholder="Color"
                        />
                    </div>
                </div>
            </div>

            <div className="userInput">
                <div className="userInputContent">
                    <div className="InputSide centrado">
                        <input
                            ref={año}
                            className="userInputText"
                            type="date"
                            placeholder="Año"
                        />
                    </div>
                </div>
            </div>
                    <div className="userInput">
                        <div className="userInputContent">
                            <div className="InputSide centrado">
                        <input
                            ref={serial}
                            className="userInputText"
                            type="text"
                            placeholder="codigo de serie"
                        />
                            </div>
                        </div>
                    </div>
                    <button
                    onClick={(ev) => {
                        ev.preventDefault();
                      // Revisa los valores de los campos y realiza las acciones necesarias
                        console.log("Formulario enviado");
                    }}
                    className="Guardar"
                    type="submit"
                    >
                    Aceptar 
                    </button>
                    <button 
                        onClick={
                        ev=>{
                        ev.preventDefault();
                        navigate('/')
                        }
                        }
                            onMouseOver={(e) => e.target.title = 'Volver'} 
                            id='BtnLogIn' className="GoBack centrado" type="sumbit">
                            <IoMdArrowRoundBack size={60}/>
                        </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
);
};

export default Sigbici;