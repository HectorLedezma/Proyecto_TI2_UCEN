import React, { useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack,IoMdBarcode } from "react-icons/io";
import { MdPedalBike } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6";
import Heading from "../Componentes/heading";
import { AiFillStar,AiOutlineHeatMap } from "react-icons/ai";
import "../styles/styleSigbici.css"
import { conexion } from "../ConectionSQL/conexion";
import Cookies from "universal-cookie";
import DropD from "../Componentes/dropdown";
import { toast } from "react-toastify";
import MenuOpci from "../Componentes/MenuOp";


function Registrar(ser,mar,mod,col,tip){
    console.log(tip);
    if(ser !== ''){
        let cok = new Cookies();
        let newBici = {
            "id_t":ser,
            "marca":mar,
            "modelo":mod,
            "color":col,
            "tipo":tip,
            "est_trans":0,
            "rut_e":cok.get('Datos').rut,
            "principal":0
        }
        let con = new conexion();
        try {
            con.crearB(newBici);
            toast.success("Medio de transporte registrado",{
                position:toast.POSITION.TOP_CENTER,
                autoClose: 5000
            });
            return true;    
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }else{
        return false;
    }
}


const Sigbici = ({ onRegister }) => {
    const serie = useRef(null);
    const marca = useRef(null);
    const model = useRef(null);
    const color = useRef(null);
    const tipo = useRef(null);

    const [id,setId] = useState(true);
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
                                <p className="badText" hidden={id}>Este campo no puede ir vacio</p>
                                <div className="userInput">
                                    <div className="userInputContent">
                                        <div className="InputSide centrado">
                                            <IoMdBarcode  size={30}/>
                                            <input
                                                ref={serie}
                                                className="userInputText"
                                                type="text"
                                                placeholder=" Serie "
                                                onChange={
                                                    ev=>{
                                                        ev.preventDefault();
                                                        setId(serie.current.value !== '');
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="userInput">
                                    <div className="userInputContent">
                                        <div className="InputSide centrado">
                                        <AiFillStar size={30}/>
                                            <input
                                                ref={marca}
                                                className="userInputText"
                                                type="text"
                                                placeholder=" Marca "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="userInput">
                                    <div className="userInputContent">
                                        <div className="InputSide centrado">
                                            <AiOutlineHeatMap size={30}/>
                                            <input
                                                ref={model}
                                                className="userInputText"
                                                type="text"
                                                placeholder=" Modelo "
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
                                        <div className="InputSide centrado" ref={tipo}>
                                            <MdPedalBike size="30"/>
                                            <DropD titulo="Tipo de transporte" items={['Bicicleta', 'Scooter','Moto']}/>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        let ok = Registrar(
                                            serie.current.value,
                                            marca.current.value,
                                            model.current.value,
                                            color.current.value,
                                            tipo.current.childNodes[1].childNodes[0].childNodes[0].childNodes[0].nodeValue
                                        );
                                        if(ok){
                                            navigate('/UserProf');
                                        }
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
                                    navigate('/bicis')
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
            <MenuOpci/>
        </div>
    </div>
);
};

export default Sigbici;