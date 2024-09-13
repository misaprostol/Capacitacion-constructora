const {Sequelize}=require('sequelize');

const database=new Sequelize(
    'SDLG',
    'root',
    '',
    {
        host:'127.0.0.1',
        dialect:'mysql'
    }
);
(async()=>{
    try{
        await database.authenticate();
        console.log('Connection has been stablished succesfully');
    } catch (error){
        console.error('Unable to connect to the database');
    }
});
module.exports=database;