// Carrega framework express
const express = require(`express`);

const calculadora = require('./calculadora')

// Cria um app usando a função express()
const app = express();

// Define porta da aplicação
const PORT = 8080;

//Cria um array para armazenar respostas dos usuários
const LOG = [];

app.get('/', function(req, rest){
    rest.send('<h1> Olá, mundo!</h1> <p>Estou na web...');
});

//URL fixa
app.get('/bem-vindo', function(req, rest){
    rest.send('<h1> Bem-vindo ao desenvolvimento WEB!</h1>');
});

//URL com multiplos parâmetro
app.get('/calculadora/somar/:a/:b', function(req, rest){
    let a = req.params.a;
    let b = req.params.a;
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1> ${a} +${b} = ${resultado} </h1>`;
    LOG.push (string_resultado)
    rest.send(string_resultado);
});

app.get('/calculadora/log', req, rest)=>{
    resultado = "";
    LOG.forEach(log => )
}


app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT);
});