import React, { useRef } from "react";
import { useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdPedalBike } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6";
import Heading from "./heading";
import { CiBarcode } from "react-icons/ci";
import { LuSticker } from "react-icons/lu";
import "../styles/styleSigbici.css"

const Sigbici = ({ onRegister }) => {
    const model = useRef(null);
    const color = useRef(null);
    const serial = useRef(null);
    const detalle = useRef(null);
    const navigate = useNavigate();


return (
    <div id="page" className="site login-show">
    <div className="container">
        <div className="wrapper">
        <div className="login">
            <Heading
                wel={
                    (
                        <h2 className="Titulo">
                            Registrar <br/> 
                            Bicicleta
                        </h2>
                    )
                }
                logo2={
                    (
                        <h2 className="welcome"><MdPedalBike size="150"/></h2>
                    )
                }
            />
            <div className="content-form">
                <div className="y-style">
                    <form action="">
                        <div className="userInput">
                            <div className="userInputContent">
                                <div className="InputSide centrado">
                                    <MdPedalBike size="30"/>
                                    <input
                                        ref={model}
                                        className="userInputText"
                                        type="text"
                                        placeholder="  Modelo "
                                    />
                                </div>
                            </div>
                        </div>
            <div className="userInput">
                <div className="userInputContent">
                    <div className="InputSide centrado">
                        <FaPaintbrush size="30"/>
                        <input
                            ref={color}
                            className="userInputText"
                            type="text"
                            placeholder="  Color "
                        />
                    </div>
                </div>
            </div>
                    <div className="userInput">
                        <div className="userInputContent">
                            <div className="InputSide centrado">
                            <CiBarcode size={30}/>
                        <input
                            ref={serial}
                            className="userInputText"
                            type="text"
                            placeholder="  Codigo de Serie "
                        />
                            </div>
                        </div>
                    </div>
                    <div className="userInput">
                <div className="userInputContent">
                    <div className="InputSide centrado">
                        <LuSticker size={30}/>
                        <textarea
                            ref={detalle}
                            className="userInputText"
                            placeholder="  Detalles "
                            style={{ fontFamily: 'poppins, sans-serif', fontSize: '16px' }}
                        />
                        </div>
                    </div>
                </div>
                    <button
                    onClick={(ev) => {
                        ev.preventDefault();
                        console.log(color.current.value);
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