const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');

const app = express();
const hbs = create({
    extname: '.hbs',
});
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
//console.log('PATH: ', path.join(__dirname, "resourses/views"));
app.engine('handlebars', hbs.engine);
app.set("view engine", 'handlebars');
app.set('views', path.join(__dirname, 'resourses/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});