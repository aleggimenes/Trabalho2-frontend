const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./pessoa')

const pessoa = mongoose.model('pessoa')

app.use(bodyParser.json())
const mongURL = 'mongodb+srv://Aluno2020:12345678910@cluster0.ggpuu.mongodb.net/pessoa?retryWrites=true&w=majority'
mongoose.connect(mongURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connect',() => {
    console.log('conectado com sucesso')
})

mongoose.connection.on('error',(err) => {
    console.log('error', err)
})

app.post('/teste',(req,res) => {
    const pessoa = new pessoa({
        nome: req.body.nome,
        email: req.body.email,
    })
    pessoa.save().then(data => {
        console.log(data)
        res.send('sucesso')
    }).catch(err => {
        console.log(err)
    })
})

app.get('/',(req,res) => {
    res.send('Bem vindo ai Nodejs')
})

app.listen(3000,() => {
    console.log('Listen na 3000')
})
