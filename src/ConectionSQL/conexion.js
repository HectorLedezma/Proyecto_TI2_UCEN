import axios from "axios";
import { useEffect, useState } from "react";
import DropD from "../Componentes/dropdown";
//import {React} from "react";
//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

const uri = 'http://localhost:8000/base';
export class conexion{
    constructor(){
        this.blog = [];
    }
    async crear(data){
        
        try {
            await axios.post(uri+'/create/',data);
        } catch (error) {
            console.log(error);
        }
        
    }

    async crearEst(data){
        
        try {
            await axios.post(uri+'/createE/',data);
        } catch (error) {
            console.log(error);
        }
        
    }

    async crearB(data){
        
        try {
            await axios.post(uri+'/createB/',data);
        } catch (error) {
            console.log(error);
        }
        
    }

    async leer(mail){
        
        try{
            const res = await axios.get(`${uri}/select/${mail}`);
            //console.log(`${uri}/select/${mail}`)
            this.blog = res.data;
        }catch(error){
            this.blog = [];
        }
        return this.blog;
    }

    async leerB(rut){
        
        try{
            const res = await axios.get(`${uri}/selectB/${rut}`);
            this.blog = res.data;
        }catch(error){
            this.blog = [];
        }
        return this.blog;
    }

    

    setblog(blo){
        
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

export const ListaCarrera = ()=>{
    const [lis,setLis] = useState([]);
    useEffect(()=>{
        Traelista();
    });
    const Traelista = async()=>{
        const res = await axios.get(`${uri}/selectC/`);
        setLis(res.data);
    }
    let list = [];
    
    for(let i = 0;i<lis.length;i++){
        list.push(lis[i].Nombre)
    }
    return(<DropD titulo="Carrera" items={list}/>);
}