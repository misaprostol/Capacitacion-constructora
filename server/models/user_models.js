const { Sequelize }= require ('sequelize');
const database= require ('../config/database');

// estructura de usuarios
const usuarios= database.define ('usuarios', {
    credencial: {
        type: Sequelize.STRING,
        primaryKey: true, 
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sede: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps:false,
});

usuarios.sync ({ alter: true });
module.exports= usuarios;