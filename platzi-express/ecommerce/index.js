const express = require('express');
const path = require("path")
const app = express();
const productsRouter = require('./routes/products')

app.get('/', function (req, res) {
    res.render('index', {hello: "hola", world: "mundo"});
})

app.get('/products', productsRouter)

app.set("views", path.join(__dirname,"./views"))
app.set("view engine", "pug")



const server = app.listen(8000, function() {
    console.log('Listening http://localhost: ' + server.address().port);
})