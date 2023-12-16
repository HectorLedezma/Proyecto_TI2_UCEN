import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'



function careta(est){
    if(est){
        return (<MdArrowDropDown size={25}/>)
    }else{
        return(<MdArrowDropUp  size={25}/>)
    }

}

function DropD(props){
    const [tit,setTit] = useState(props.titulo)
    const [key,setKey] = useState(0);

    function creaItems(items){
        let arr = [];
        for(let i = 0;i<items.length;i++){
            //console.log(items[i]);
            arr.push(
                <DropdownItem className="DrpDwnMenuItem centrado2" key={i}
                    onClick={
                        ev=>{
                            ev.preventDefault();
                            setTit(items[i]);
                            setKey(i+1)
                        }
                    }
                >{items[i]}</DropdownItem>
            );
        }
        return arr;
    }
    
    const [dp,setDp] = useState(false);
    
    const OpeClo = ()=>{
        setDp(!dp);
    }
    return(
    <div className="DrpDwn">
        <Dropdown isOpen={dp} toggle={OpeClo}>
            <DropdownToggle caret className="centrado2" id={key}>
                {tit}{careta(!dp)}
                <DropdownMenu hidden={!dp} container="body" className="DrpDwnMenu">
                {creaItems(props.items)}
            </DropdownMenu>
            </DropdownToggle>
        </Dropdown>
    </div>)
}


export default DropD;