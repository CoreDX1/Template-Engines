const express = require('express')
const app = express()

app.use( express.static(( __dirname, './static')));
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

let arr = []

//Obtener Producto
app.get('/productos', (req, res) => {
  res.render('index', {data: arr})
})

app.get('/form', (req, res) => {
  res.render('form')
}) 

// Crear Productos
app.post('/creatPr', (req, res) => {
  console.log(req.body)
  let oj = req.body
  arr.push(oj)
  res.render('exito')
})

app.listen(8080, () => {
  console.log('Server ok')
})

