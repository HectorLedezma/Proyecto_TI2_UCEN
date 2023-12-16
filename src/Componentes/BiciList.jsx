import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function TraeBicis(props){
    let cock = new Cookies();
    const navigate = useNavigate();
    //let data = cock.get('BiciData');
    let arr = [];
    for(let i = 0;i<props.data.length;i++){
        arr.push(
            <div className="BikeBox clickeable" key={i}
                onClick={
                    ev=>{
                        ev.preventDefault();
                        let datQR = {
                            'id_t':props.data[i].id_t,
                            'rut_e':props.rut
                        };
                        //console.log(datQR)
                        cock.set(
                            'qrbici',
                            datQR,
                            {path:'/'}
                        );
                        navigate('/qrCode');
                        //Nav('/qrCode');
                    }
                }
            >
                <div className="BikeBoxCont">
                    <h3>N° serie</h3>
                    <p>{props.data[i].id_t}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Trasporte</h3>
                    <p>{props.data[i].tipo}{' '}{props.data[i].marca}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Modelo</h3>
                    <p>{props.data[i].modelo}</p>
                </div>
            </div>
        )
    }
    return arr;
}

export default TraeBicis