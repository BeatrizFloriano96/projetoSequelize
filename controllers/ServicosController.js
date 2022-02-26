const { Servicos } = require('../models')
const { Op } = require('sequelize');

const ServicosController = {
    index: async (req,res) => {
        let servicos = await Servicos.findAll()

        return res.render('servicos', {servicos})
    }
}


module.exports = ServicosController;

