const express= require ('express');
const router= express.Router();
const userController=require("../controllers/user_controller")
router.get('/', userController.obtenerTodos);
router.get('/:credencial', userController.obtener);
router.post('/', userController.crear);
router.put('/:credencial', userController.actualizar);
router.delete('/:credencial', userController.borrar);
module.exports= router;