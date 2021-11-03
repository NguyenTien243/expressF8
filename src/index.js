const path = require('path')
const express = require('express')
const morgan = require('morgan')
var handlebars  = require('express-handlebars');
const app = express()
const port = 3000

// use static file
app.use(express.static(path.join(__dirname,"public"))) // truy cập http://localhost:3000/img/b1.jpg
// http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: ".hbs"  // đổi tên đuôi handlebars thành đuôi hbs để dùng
}));
app.set('view engine', 'hbs');
// set đường dẫn tới view
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log('Path:  ', path.join(__dirname,'resources/views'))
console.log('Path:  ', path.join(__dirname,'resources','views'))
console.log(__dirname)
app.get('/tin', (req, res) => {
    var a = 5
    var b = 6
    res.render('home');
})

app.get('/news', (req, res) => {
  var a = 5
  var b = 6
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})