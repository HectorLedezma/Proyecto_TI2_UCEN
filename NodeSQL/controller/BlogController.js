import { Op } from "sequelize";
import {UserModel,UserEsModel, BikeModel, CarreraModel, HistModel, LostModel} from "../models/BlogModels.js";

export const Create = async (req, res)=>{
    let op = {
        raw:true,
        silent:true,
        fields:['rut','nombre','apellido','fono','correo','estado','clave']
    };
    try{
        await UserModel.create(req.body,op);
        res.json({message:'Creado'});
    }catch(error){
        res.json({message:error.message})
        //res.json()
    }
}

export const Update = async (req, res)=>{
    try{
        console.log(UserModel);
        const [count, updatedRows] = await UserModel.update(req.body, {
            where: { "rut": req.params.rut }
          });
        console.log(`Filas actualizadas: ${count}`);
        // Verifica si se actualizaron filas antes de enviar la respuesta
        if (count > 0) {
            res.json({ success: true, message: `Se actualizaron ${count} filas.` });
        } else {
            res.json({ success: false, message: 'No se encontraron filas para actualizar.' });
        }
    }catch(error){
        res.json({message:error.message})
    }
}

export const UpdateBici = async (req, res)=>{
    try{
        console.log(BikeModel);
        const [count, updatedRows] = await BikeModel.update(req.body, {
            where: { "id_t": req.params.id, "rut_e":req.params.rut }
          });
        console.log(`Filas actualizadas: ${count}`);
        // Verifica si se actualizaron filas antes de enviar la respuesta
        if (count > 0) {
            res.json({ success: true, message: `Se actualizaron ${count} filas.` });
        } else {
            res.json({ success: false, message: 'No se encontraron filas para actualizar.' });
        }
    }catch(error){
        res.json({message:error.message})
    }
}

export const UpdateBici2 = async (req, res)=>{
    try{
        console.log(BikeModel);
        const [count, updatedRows] = await BikeModel.update(req.body, {
            where: { "id_t":{[Op.ne]: req.params.id}, "rut_e":req.params.rut }
          });
        console.log(`Filas actualizadas: ${count}`);
        // Verifica si se actualizaron filas antes de enviar la respuesta
        if (count > 0) {
            res.json({ success: true, message: `Se actualizaron ${count} filas.` });
        } else {
            res.json({ success: false, message: 'No se encontraron filas para actualizar.' });
        }
    }catch(error){
        res.json({message:error.message})
    }
}


export const CreateEst = async (req, res)=>{
    let op = {
        raw:true,
        silent:true,
        fields:['rut_e','carrera']
    };
    try{
        await UserEsModel.create(req.body,op);
        res.json({message:'Creado'});
    }catch(error){
        res.json({message:error.message})
    }
}

export const CreateBike = async (req, res)=>{
    let op = {
        raw:true,
        silent:true,
        fields:['id_t','marca','modelo','color','tipo','est_trans','rut_e']
    };
    try{
        await BikeModel.create(req.body,op);
        res.json({message:'Creado'});
    }catch(error){
        res.json({message:error.message})
        //res.json()
    }
}

export const ReadAll = async (req, res)=>{
    try{
        let blogs = await UserModel.findAll({attributes:['rut']});
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const ReadAllB = async (req, res)=>{
    try{
        let blogs = await BikeModel.findAll({
            attributes:['id_t','marca','modelo','color','tipo','est_trans','principal'],
            where:{
                'rut_e':req.params.rut_e,
                'est_trans':0
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const ReadOneB = async (req, res)=>{
    try{
        let blogs = await BikeModel.findOne({
            attributes:['id_t','marca','modelo','color','tipo','est_trans','principal'],
            where:{
                'rut_e':req.params.rut_e,
                'id_t':req.params.id_t,
                'est_trans':0
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}


export const ReadOnePB = async (req, res)=>{
    try{
        let blogs = await BikeModel.findOne({
            attributes:['id_t','marca','modelo','color','tipo','est_trans','principal'],
            where:{
                'rut_e':req.params.rut_e,
                'principal':1
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const ReadAllHist = async (req, res)=>{
    try{
        let blogs = await HistModel.findAll({
            attributes:['fecha','hora','edificio','tipo'],
            where:{
                'rut_e':req.params.rut_e
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}


export const ReadCarr = async (req, res)=>{
    try{
        let blogs = await CarreraModel.findAll({
            attributes:['Nombre']
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const UpdateEst = async (req, res)=>{
    try{
        let blogs = await UserEsModel.update(req.body,{
            where:{
                rut_e:req.params.rut
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}


export const ReadOne = async (req, res)=>{
    try{
        let blogs = await UserModel.findOne({
            attributes:['rut','nombre','apellido','fono','correo','estado','clave'],
            where:{
                'rut':req.params.rut
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}


export const ReadLost = async (req,res)=>{
    try {
        let blogs = await LostModel.findAll({attributes:['Objeto','FecEncontrado','HrEncontrado']});
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}
/*


export const Delete = async (req, res)=>{
    try{
        let blogs = await UserModel.destroy({
            where:{
                'Mail':req.params.Mail
            }
        });
        res.json({message:'Eliminado'});
    }catch(error){
        res.json({message:error.message})
    }
}
*/