import axios from "axios";
//import {React} from "react";
//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";


export class conexion{
    constructor(){
        this.uri = 'http://localhost:8000/base';
        this.blog = [];
    }
    crear(data){

    }
    async leer(mail){
        console.log('buscando usuario: ',`${this.uri}/select/${mail}`)
        try{
            const res = await axios.get(`${this.uri}/select/${mail}`);
            this.blog = res.data;
        }catch(error){
            this.blog = [];
        }
        return this.blog;
    }

    setblog(blo){
        //console.log(blo);
        this.blog = blo;
    }

    getblog(){
        return this.blog;
    }

    actualizar(){

    }
    eliminar(){

    }
}
/*

const CompoRead = ()=>{
    const [blog,setBlog] = useState([]);
    useEffect(()=>{
        getBolg()
    },[])
    const getBolg = async ()=> {

    }
    const delBolg = async ()=> {
        
    }
    return(
        <div>

        </div>
    )
}
*/