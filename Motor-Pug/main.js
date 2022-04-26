const express = require('express')
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static((__dirname, './static')))
app.use(express.json())
app.use(express.urlencoded({ extended:false}))
let array = []

app.get('/form', (req, res) => {
  res.render('form', {name: 'Camilo'})
})

app.get('/productos', (req, res) => {
  res.render('products', {
    data: array,
    valor: array.length <= 0 ? true : false
  })
})

app.post('/creatPr', (req, res) => {
  console.log(req.body)
  let oj = req.body
  array.push(oj)
  res.render('exito')
})
app.listen(8080, () => {
  console.log('Server ok')
})