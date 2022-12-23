const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');

const app = express();
const hbs = create({
    extname: '.hbs'
});
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Template engine
//console.log('PATH: ', path.join(__dirname, "resourses/views"));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resourses/views"));

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});