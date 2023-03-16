const express = require('express'); //Используется для быстрого создания веб-приложения
const bodyParser = require('body-parser'); //Извлекает весь входящий поток и предоставляет ее req.body
const pdf = require('html-pdf');
const cors = require('cors'); //Чтобы не было CORS ошибок

const pdfTemplate = require('./documents');

const app = express();

//Создаем порт
const port = process.env.PORT || 5000;

//Чтобы express.js использовал cors
app.use(cors());
//Чтобы express.js использовал body-parser и брал все запросы, кроме строк
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Отправляем запрос
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    })
})

//Получаем запрос
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listeninig om port ${port}`));

