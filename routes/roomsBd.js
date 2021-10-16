import express from 'express';
const router = express.Router();

//importar el modelo 
import roomsBd from '../models/roomsBd';




//POS AGREGAR UN REGISTRO
router.post('/nuevo-registro', async (req, res) => {
    const body = req.body;

    try {
        const roomsBD = await roomsBd.create(body);
        res.status(200).json(roomsBD);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Upps! Error Inesperado durante la creacion de la habitacion',
            error
        });
    }
});


//GET BUSCAR TODOS LOS REGISTROS
router.get('/buscarTodo', async(req, res)=>{
    try {
        const roomsDb = await roomsBd.find();
        res.json(roomsDb);

    } catch (error) {
        return res.status(400).json({
            mensaje :'Error en la busqueda',
            error
        })
    }
});

//GET CON PARAMETRO
router.get('/buscarParametro/:id', async(req, res)=>{
    const _id = req.params.id;
    try {
        const roomsDb = await roomsBd.findOne({_id});
        res.json(roomsDb);


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en la busqueda de parametro',
            error
        })
    }
});

//DELETE PARAMETRO
router.delete('/eliminarParametro/:id', async(req, res)=>{
    
    const _id = req.params.id;

    try {
        const roomsDb = await roomsBd.findByIdAndDelete({_id});
        if(!roomsDb){

            return res.status(400).json({
                mensaje:'no se encontro el registro',
                error
            })
        }
        res.json(roomsDb)
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error al borrar',
        })
        
    }
});

//PUT ACTUALIZAR MASCOTA
router.put('/actualizar/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const roomsDb = await roomsBd.findByIdAndUpdate(
            _id,
            body,{new:true});
            res.json(roomsDb);


    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error al actualizar',
            error
        })
    }
});
//exportar la configuracion de express>
module.exports=router