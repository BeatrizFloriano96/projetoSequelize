
const { Usuario } = require('../models')
const { Op } = require('sequelize');

const UserController = {
    index: async (req,res)=>{
        const {nome} = req.query //isso não é necessário neste caso
        let users = await Usuario.findByPk(6).then((users) => {

            res.send(users)                      
            
        }).catch('Ocorreu um erro')

        //console.log(users)
       //res.send(users)
    }
}

module.exports = UserController;


