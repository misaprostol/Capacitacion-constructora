const express= require ('express');
const router= express.Router();
const bcrypt= require ('bcrypt');
const Usuarios = require("../models/user_models");
// Controlador de productos
const encriptar=async(password)=>{
  
}
const obtenerTodos = async (req, res) => {
  // Obtiene todos los usuarios de la base de datos
  try {
    const users = await Usuarios.findAll()
    return res.json(users)
  } catch (error) {
    return res.json({err: error})
  }
}

const obtener = async (req, res) => {
  try {
    const { credencial } = req.params
    console.log(credencial)
    const user = await Usuarios.findByPk(credencial)
  
    return res.status(200).json(user) 
  } catch (error) {
    return res.status(500).json({error: "Internal Server Error"})
  }
}

const crear = async (req, res) => {
  try {
    const { credencial,nombre,sede} = req.body;
    // encriptar(credencial)
    const credencial_hasheada=await bcrypt.hash(credencial,10);
    console.log(credencial_hasheada);
    const usuarioNuevo = await Usuarios.create({ 
        credencial_hasheada,
        nombre,
        sede
    });
    usuarioNuevo.save();

    return res.status(200).json({
      message: "Usuario creado!",
      data: usuarioNuevo
    })

  } catch (error) {
    return res.status(500).json({error: "Internal Server Error"})
  }
}

const actualizar = async (req, res) => {
  try {
    const {credencial}=req.params;
    const {nombre,sede} = req.body
    await Usuarios.update(
        { nombre,sede},
        {
          where: {
            credencial:credencial,
          },
        },
      );
    res.json({message: "Usuario actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const {credencial}=req.params;
    await Usuarios.destroy({
        where:{
            credencial:credencial
        }
    })
    res.json({message: "Usuario borrado"})
  } catch (error) {
    throw error
  }
}



module.exports= {
    obtenerTodos,
    obtener,
    crear,
    actualizar,
    borrar
}