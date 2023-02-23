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

    static async delete(req, res) {
        const id = req.body.id
        await Client.deleteOne({_id: id})
        res.redirect('/clients/list')
    }

    static async edit(req, res) {
        const id = req.body.id
        const client = await Client.findOne({_id: id}).lean()
        res.render('clients/edit', {client})
    }

    static async update(req, res) {
        const id = req.body.id
        const name = req.body.name
        const age = req.body.age
        const occupation = req.body.occupation

        await Client.updateOne(
            { _id: id },
            { name, age, occupation }
        )
        res.redirect('/clients/list')
    }

}