const express= require ('express');
const router= express.Router();
const userController=require("../controllers/user_controller.js")
router.get('/', userController.obtenerTodos);
router.get("/:id", userController.obtener);
router.post('/', userController.crear);
router.put('/:id', userController.actualizar);
router.delete('/:id', userController.borrar);
module.exports= router;