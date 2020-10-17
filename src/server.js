//ctrl + L - limpar o terminal
// node nome do servidor - para executar o servidorcd 
//cd nome do diretorio - comando para entrar em um diretorio
// cd ../ - voltar a pasta de origem

//importar dependencias
const { response } = require('express')
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//inciando o express
const server = express()
server
//utilizando doby do req
.use(express.urlencoded({extended: true}))
//ultilizando arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname,'views'))
.set('view engine', 'hbs')

//rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)