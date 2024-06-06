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
  res.send(lista.filter(Boolean))
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

  if (!novoItem) {
    return res.send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  if (lista.includes(novoItem)) {
    return res.send('Item já existe na lista.')
  }

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

// Endpoint Delete [DELETE] /inventario/:id
app.delete('/inventario/:id', function (req, res) {

  const id = req.params.id

  delete lista[id - 1]
  
  res.send('Item removido com sucesso: ' + id)
})

app.listen(3000)