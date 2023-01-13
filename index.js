const minimist = require('minimist')
const compra = require('./compras').compras

const args = minimist(process.argv.slice(2))

const nome = args['nome']
const valor = args['valor']
const primeiraCompra = false
const pagamentoAvista = false

compra(nome,valor,primeiraCompra,pagamentoAvista)




