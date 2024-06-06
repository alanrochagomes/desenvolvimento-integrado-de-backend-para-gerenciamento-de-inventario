const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})

const lista = ['Notebook', 'Phone', 'Tablet']
//              0           1        2

// Endpoint Read All [GET] /inventario
app.get('/inventario', function (req, res) {
  res.send(lista)
})

// Endpoint Read By Id [GET] /inventario/:id
app.get('/inventario/:id', function (req, res) {
  const id = req.params.id

  const item = lista[id - 1]

  res.send(item)
})

app.use(express.json())

// Endpoint Create [POST] /inventario
app.post('/inventario', function (req, res) {

  const body = req.body

  const novoItem = body.nome

  lista.push(novoItem)

  res.send('Item adicionado com sucesso: ' + novoItem)
})

// Endpoint Update [PUT] /inventario
app.put('/inventario/:id', function (req, res) {
  const id = req.params.id

  const body = req.body

  const novoItem = body.nome

  lista[id -1 ] = novoItem

  res.send('Item atualizado com sucesso: ' + id + ' - ' + novoItem)
})

app.listen(3000)