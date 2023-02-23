module.exports = class ClientController {

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