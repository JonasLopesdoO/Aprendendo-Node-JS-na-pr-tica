var express = require('express');
var app = express();

//chamada da funcao em arquivo externo
var minhaFuncao = require('./funcao');

var bodyParser = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/', function (req, res) {
  res.render("home", {
      item: "Lorem ipsum"
  })
});

app.listen(8000, function () {
  console.log('Está rodando na porta 8000!');
});
