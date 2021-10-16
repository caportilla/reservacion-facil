//import model users
import userModel from '../models/accountSchema.js';
//import router from express
import express from 'express';
const router = express.Router();

//view login
router.get('/login', (req, res) => {

    try {
        res.status(200).json({
            message: "ok",
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error, durante la petición',
            error
        })
    }

});

//create account
router.post('/create/account', async (req, res) => {

    const body = req.body;

    try {

        const userDB = await userModel.create(body);
        res.status(200).json(userDB);

    } catch (error) {
        return res.status(500).json({
            message: 'Upps! Error Inesperado durante la creacion de cuenta',
            error
        });
    }
});

//all account
router.get('/accounts', async (req, res) => {

    try {

        const accounts = await userModel.find();
        res.status(200).json(accounts);

    } catch (error) {
        return res.status(500).json({
            message: 'Upps! Error Inesperado durante la petición',
            error
        });
    }
});

//get account id
router.get('/account/:id', async (req, res) => {
    const _id = req.params.id;
    try {

        const account = await userModel.findOne({ _id });
        res.status(200).json(account);

    } catch (error) {
        return res.status(500).json({
            message: 'Upps! Error Inesperado durante la petición',
            error
        });
    }
});

//delete account 
router.delete('/account/:id', async (req, res) => {

    const _id = req.params.id;

    try {

        const account = await userModel.findByIdAndDelete({ _id });

        if (account == null) {
            res.json({
                message: 'No se encontro la cuenta'
            });
        }

        res.status(200).json(account);

    } catch (error) {
        return res.status(500).json({
            message: 'Upps! Error Inesperado durante la petición',
            error
        });
    }
});


//edit account 
router.put('/account/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {

        const account = await userModel.findByIdAndUpdate( 
            _id, 
            body, 
            {new: true}
        );

        if (account == null) {
            res.json({
                message: 'No se pudo editar'
            });
        }
        
        res.status(200).json(account);

    } catch (error) {
        return res.status(500).json({
            message: 'Upps! Error Inesperado durante la petición',
            error
        });
    }
});

//export router
module.exports = router;
