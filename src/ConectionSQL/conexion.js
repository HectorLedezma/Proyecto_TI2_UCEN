import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BiciList from "../Componentes/BiciList";
import TraeHist from "../Componentes/RegHis";
import QRCode from "react-qr-code";
import { Navigate, useNavigate } from "react-router-dom";
import TraeObjs from "../Componentes/LostList";
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
        await axios.post(uri+'/createB/',data);
    }

    async leer(rut){
        
        try{
            const res = await axios.get(`${uri}/select/${rut}`);
            //console.log(`${uri}/select/${rut}`)
            this.blog = res.data;
        }catch(error){
            this.blog = {};
        }
        return this.blog;
    }

    async leerT(){
        
        try{
            const res = await axios.get(`${uri}/selectT/`);
            //console.log(`${uri}/select/${rut}`)
            this.blog = res.data;
        }catch(error){
            this.blog = [];
        }
        return this.blog;
    }

    async cambiaClave(rut,newpass){
        try {
            await axios.put(`${uri}/updateP/${rut}`,{"clave":newpass})
        } catch (error) {
            console.log(error);
        }
    }

    async ModBici(id_t,rut_e,data){
        try {
            await axios.put(`${uri}/updateB/${id_t}/${rut_e}`,data)
        } catch (error) {
            console.log(error);
        }
    }
    async ModBici2(id_t,rut_e,data){
        try {
            await axios.put(`${uri}/updateBB/${id_t}/${rut_e}`,data)
        } catch (error) {
            console.log(error);
        }
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

    async leerH(rut){
        
        try{
            const res = await axios.get(`${uri}/selectH/${rut}`);
            this.blog = res.data;
        }catch(error){
            this.blog = [];
        }
        return this.blog;
    }

    async listaCarrera(){
        const res = await axios.get(`${uri}/selectC/`);
        let list = [];
        
        for(let i = 0;i<res.data.length;i++){
            list.push(res.data[i].Nombre)
        }
        return list;
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

export const ListaBici = (props)=>{
    const [lis,setLis] = useState([{}]);
    //const [dat,setDat] = useState(<BiciList rut={props.rut} data={lis}/>);
    useEffect(()=>{
        Traelista();
        
    });
    function esperar(tiempo) {
        return new Promise(resolve => {
          setTimeout(resolve, tiempo);
        });
      }
    const Traelista = async()=>{
        try{
            const res = await axios.get(`${uri}/selectB/${props.rut}`);
            await esperar(250);
            setLis(res.data);
        }catch(error){
            console.log(error)
        }
    }
    
    //{}
    return (<BiciList rut={props.rut} data={lis}/>)
    /*
    return (<div onClick={ev=>{
        ev.preventDefault();
        console.log('clickeado');
        setDat(<BiciList rut={props.rut} data={lis}/>);
        //console.log(com.current.childNodes[0])
    }}>
        <div ref={com}>{dat}</div>
    </div>);*/
}

export const TraeQRP = (props)=>{
    const [lis,setLis] = useState({});
    useEffect(()=>{
        ImData();
    },[]);
    const ImData = async ()=>{
        try {
            const res = await axios.get(`${uri}/selectPB/${props.rut}`);
            setLis(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    try {
        return(<QRCode className='QRcode' value={
            props.rut+"=="+lis.id_t
        } size={230} bgColor="#002aff" fgColor="#fff" level="H" />)
    } catch (error) {
        return(<h4 >No tienes asignada ningun veiculo como principal</h4>)
    }
    
}

export const TraeQR = (props)=>{
    const [lis,setLis] = useState({});
    useEffect(()=>{
        ImData();
    },[]);
    const ImData = async ()=>{
        try {
            const res = await axios.get(`${uri}/selectOB/${props.id_e}/${props.rut}`);
            setLis(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    return(<QRCode className='QRcode' value={
        props.rut+"=="+lis.id_t
    } size={230} bgColor="#002aff" fgColor="#fff" level="H" />)
}


export const Historial = (props)=>{
    const [lis,setLis] = useState([]);
    useEffect(()=>{
        Traelista();
    },[]);
    const Traelista = async()=>{
        try{
            const res = await axios.get(`${uri}/selectH/${props.rut}`);
            setLis(res.data);
        }catch(error){
            console.log(error)
        }
    }
    if(lis.length===0){
        return(<h1>No hay entradas o salidas registradas a tu nombre</h1>);
    }else{
        return(<TraeHist data={lis}/>);
    }
    
}

export const ObjPerdido = ()=>{
    const [lis,setLis] = useState([]);
    const [time,setTime] = useState(250);
    useEffect(()=>{
        Traelista();
    });

    function esperar(tiempo) {
        setTime(30000);
        return new Promise(resolve => {
            setTimeout(resolve, tiempo);
        });
    }

    const Traelista = async()=>{
        try{
            const res = await axios.get(`${uri}/selectLost/`);
            await esperar(time);
            setLis(res.data);
        }catch(error){
            console.log(error)
        }
    }
    if(lis.length===0){
        return(<h1>No se han reportado objetos perdidos</h1>);
    }else{
        return(<TraeObjs data={lis}/>);
    }
    
}