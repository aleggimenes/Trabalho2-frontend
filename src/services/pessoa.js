const mongoose = require ('mongoose')
const pessoaSchema = new mongoose.Schema({
    nome: String,
    email: String,
})

mongoose.model('pessoa',pessoaSchema)