const orphanages = require('./database/fakedata.js');// os dados que vai para o front-end vem daqui

module.exports = {
    index(req, res){
        const city = req.query.city
        return res.render('index')
    },

    orphanage(req, res){
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages', {orphanages}) //mandando os dados para o front-end
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}