import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

function TraeHist(props){
    //let cock = new Cookies();
    //const navigate = useNavigate();
    //let data = cock.get('BiciData');

    function color(tip){
        if(tip === 'ingreso'){
            return (<FaRegArrowAltCircleDown size={30}/>)
        }else{
            return (<FaRegArrowAltCircleUp size={30}/>)
        }
    }

    let arr = [];
    for(let i = 0;i<props.data.length;i++){
        arr.push(
            <div className="BikeBox clickeable" key={i}
                onClick={
                    ev=>{
                        ev.preventDefault();
                        
                    }
                }
            >
                <div className="BikeBoxCont">
                    <h3>Fecha</h3>
                    <p>{props.data[i].fecha}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Hora</h3>
                    <p>{props.data[i].hora}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Edificio</h3>
                    <p>{props.data[i].edificio}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Tipo</h3>
                    <p>{props.data[i].tipo}</p>
                </div>
                <div className="BikeBoxCont centrado2">
                    {color(props.data[i].tipo)}
                </div>
            </div>
        )
    }
    return arr;
}

export default TraeHist;