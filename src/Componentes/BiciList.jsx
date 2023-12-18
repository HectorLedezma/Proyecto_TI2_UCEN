import { FaQrcode } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { conexion } from "../ConectionSQL/conexion";
import { useState } from "react";

function principal(est){
    if(est === 1){
        return 'verde'
    }else{
        return ''
    }
}

function CambiaP(rut,id,est){
    let con = new conexion();
    let dat = {};
    let dat2 = {};
    if(est === 1){
        dat = {
            "principal":0
        };
        con.ModBici(id,rut,dat);
    }else{
        dat = {
            "principal":1
        };
        dat2 = {
            "principal":0
        }
        con.ModBici(id,rut,dat);
        con.ModBici2(id,rut,dat2);
    }
    
}

function TraeBicis(props){
    let cock = new Cookies();
    const [prin,setPrin] = useState(false);
    const navigate = useNavigate();
    //let data = cock.get('BiciData');
    let arr = [];
    for(let i = 0;i<props.data.length;i++){
        arr.push(
            <div className="BikeBox" key={i} presed={prin}
            >
                <div className="BikeBoxCont centrado2">
                    <FaQrcode className="clickeable iconBike" size={30}
                        onClick={
                            ev=>{
                                ev.preventDefault();
                                let datQR = {
                                    'id_t':props.data[i].id_t,
                                    'rut_e':props.rut
                                };
                                cock.set(
                                    'qrbici',
                                    datQR,
                                    {path:'/'}
                                );
                                navigate('/qrCode');
                            }
                        }
                    />
                </div>
                <div className="BikeBoxCont">
                    <label><h3>N° serie</h3></label>
                    <label><p>{props.data[i].id_t}</p></label>
                </div>
                <div className="BikeBoxCont">
                    <h3>Trasporte</h3>
                    <p>{props.data[i].tipo}{' '}{props.data[i].marca}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Modelo</h3>
                    <p>{props.data[i].modelo}</p>
                </div>
                <div className="BikeBoxCont centrado2">
                    <FaHeartCircleCheck className={"clickeable iconBike "+principal(props.data[i].principal)} size={30}
                        onClick={
                            ev=>{
                                ev.preventDefault();
                                //console.log()
                                CambiaP(
                                    props.rut,
                                    props.data[i].id_t,
                                    props.data[i].principal
                                );
                                setPrin(true);
                            }
                        }
                    />
                </div>
            </div>
        )
    }
    return arr;
}

export default TraeBicis