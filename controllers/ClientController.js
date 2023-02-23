module.exports = class ClientController {

    static list(req, res){
        const clients = []
        const clients_exist = (clients.length > 0) ? true : false
        res.render('clients/list', {clients_exist, clients})
    }
    
    static create(req, res){
        res.render('clients/create')
    }

    static insert(req, res){
        const name = req.body.name
        const age = req.body.age
        const occupation = req.body.occupation

        console.log('ClientRegister Model not created.')
        console.log(`Data: {${name}, ${age}, ${occupation}}`)

        res.redirect('/')
    }

}