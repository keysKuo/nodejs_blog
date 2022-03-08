const port = 8080;
const express = require('express');
const app = express();
const morgan = require('morgan');
const expressHandlebars = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', expressHandlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));