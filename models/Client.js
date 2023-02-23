const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = mongoose.model(
    'Client',
    new Schema({
        name: {type: String, required: true},
        age: {type: Number, required: true},
        occupation: {type: String, required: true}
    })
)