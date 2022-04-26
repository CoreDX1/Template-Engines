const express = require('express')
const app = express()
const {engine} = require('express-handlebars')

app.set('views', './views')
app.set('view engine', 'hbs')
app.use( express.static(( __dirname, './static')));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

let arr = []

app.engine('hbs', engine({
  extname: 'hbs',
  leyuotsDir:__dirname+'/views/layouts',
  defaultLayout:'index',
  partialsDir:__dirname+'/views/partials'
}))

app.get('/productos', (req, res) => {
  res.render('index', {
    data: arr,
    isDisplayLength: arr.length <= 0 ? true : false,
  })
})

app.get('/form', (req, res) => {
  res.render('form' , {data: arr})
})

app.post('/creatPr', (req, res) => {
  console.log(req.body)
  let oj = req.body
  arr.push(oj)
  res.render('exito')
})

app.listen(8080, () => {
  console.log('Server ok')
})
