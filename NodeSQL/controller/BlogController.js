import BlogModel from "../models/BlogModels.js";

export const Create = async (req, res)=>{
    try{
        console.log(req.body);
        let blogs = await BlogModel.create(req.body);
        res.json({message:'Creado'});
    }catch(error){
        res.json({message:error.message})
    }
}

export const ReadAll = async (req, res)=>{
    try{
        let blogs = await BlogModel.findAll({attributes:['Mail']});
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const ReadOne = async (req, res)=>{
    try{
        let blogs = await BlogModel.findAll({
            attributes:['Mail','Nombre','Apellido','Pass','Type'],
            where:{
                'Mail':req.params.Mail
            }
        });
        res.json(blogs);
    }catch(error){
        res.json({message:error.message})
    }
}

export const Update = async (req, res)=>{
    try{
        let blogs = await BlogModel.update(req.body,{
            where:{
                'Mail':req.params.Mail
            }
        });
        res.json({message:'Actualizado'});
    }catch(error){
        res.json({message:error.message})
    }
}

export const Delete = async (req, res)=>{
    try{
        let blogs = await BlogModel.destroy({
            where:{
                'Mail':req.params.Mail
            }
        });
        res.json({message:'Eliminado'});
    }catch(error){
        res.json({message:error.message})
    }
}