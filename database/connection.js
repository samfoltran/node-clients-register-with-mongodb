const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/clients-register-v1-0')
    console.log('Database connected.')
}

main().catch(error => console.log(error))

module.exports = mongoose