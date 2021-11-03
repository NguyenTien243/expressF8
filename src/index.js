const path = require('path')
const express = require('express')
const morgan = require('morgan')
var handlebars  = require('express-handlebars');
const app = express()
const port = 3000

// sử dụng route
const route = require('./routes')
// routes init
route(app)
// sử dụng middleware của express ( từ version 4.16 trở đi)
app.use(express.urlencoded({ extended : true })) // sử lý cho dạng flowFrom
app.use(express.json()) // xử lý dạng gửi từ code js lên
// use static file
app.use(express.static(path.join(__dirname,"public"))) // truy cập http://localhost:3000/img/b1.jpg
// http logger
//app.use(morgan('combined'))

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})