var express = require('express');
var app = express();

var minhaFuncao = require("./funcoes");

var bodyParser = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send("Itens mini training OSF");
});

app.get('/questao1/', function (req, res) {

    res.render("questao1", {
        item: "Para executar a função, adicione um parâmetro na URL: Exemplo - http://localhost:3050/questao1/3"
    })
  });

app.get('/questao1/:id', function (req, res) {
    let numero = req.params.id

    res.render("questao1", {
        item1:  minhaFuncao.funcParImpar(numero)
    })
  });

  app.get('/questao2', function (req, res) {    
    res.render("questao2", {
        item2 : minhaFuncao.numAleatorio()
    })
  });

  app.get('/questao3', function (req, res) {

    res.send( "Para executar a função, adicione um parâmetro na URL: Exemplo - http://localhost:3050/questao3/6");
  });

 app.get('/questao3/:id', function (req, res) {
    let numero = req.params.id

    if(numero < 5){
        res.render("questao3", {
            item3 : numero
        })
    }else{
        res.send(numero);
    }
  });

  app.get('/questao4', function (req, res) {
    let numeros = new Array()

    for(let i = 0; i < 15; i++){
        numeros.push(minhaFuncao.numAleatorio());
    }
    
    res.render("questao4", {
        item4: numeros
    })
  });

app.listen(3050, function () {
  console.log('Está rodando na porta 3050!');
});
