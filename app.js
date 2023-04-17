const express = require('express')
const app = express()
const Port = 8080
const bodyParser = require('body-parser')

//CONFIGURANDO BODY-PARSER
app.use(express.urlencoded());
app.use(bodyParser.json())

//CONFIGURANDO O HTML PARA EJS
app.set('view engine', 'ejs')

//CONFIGURAÇÃO DOS ARQUIVOS ESTÁTICOS
app.use(express.static("public"))

//CRIANDO A ROTA HOME
app.get('/home', (req, res) => {
    res.render("index")
})

app.get('/url', function (req, res) {
    res.render('view', {
        page: req.url,
        nav: {
            'Page 1': '/page1',
            'Page 2': '/page2',
            'Page 3': '/page3'
        }
    });
});

//CONFIGURANDO A ROTA ANIMES
app.get('/main', (req, res) => {
    res.render('./page/main')
})
//CONFIGURANDO A ROTA ANIMES
app.get('/animes', (req, res) => {
    res.render('./page/animes')
})

//CONFIGURANDO O SERVIDOR
app.listen(Port, () => {
    console.log("SERVIDOR ONLINE!")
}) 