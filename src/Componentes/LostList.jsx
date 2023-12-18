function TraeObjs(props){
    //let data = cock.get('BiciData');
    let arr = [];
    for(let i = 0;i<props.data.length;i++){
        arr.push(
            <div className="BikeBox" key={i}
            >
                <div className="BikeBoxCont">
                    <label><h3>Objeto</h3></label>
                    <label><p>{props.data[i].Objeto}</p></label>
                </div>
                <div className="BikeBoxCont">
                    <h3>Fecha en que se encontró</h3>
                    <p>{props.data[i].FecEncontrado}</p>
                </div>
                <div className="BikeBoxCont">
                    <h3>Hora en que se encontró</h3>
                    <p>{props.data[i].HrEncontrado}</p>
                </div>
            </div>
        )
    }
    return arr;
}

export default TraeObjs