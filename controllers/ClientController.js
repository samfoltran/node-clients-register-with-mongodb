const Client = require('../models/Client')

module.exports = class ClientController {

    static async list(req, res){
        const clients = await Client.find().lean()
        const clients_exist = (clients.length > 0) ? true : false
        res.render('clients/list', {clients_exist, clients})
    }
    
    static create(req, res){
        res.render('clients/create')
    }

    static async insert(req, res){

        const name = req.body.name
        const age = req.body.age
        const occupation = req.body.occupation

        const client = new Client({ name, age, occupation })
        await client.save()

        res.redirect('/clients/list')
        
    }

}