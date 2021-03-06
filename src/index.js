const path = require('path');
const express = require('express'); // nap thu vien
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); // tra ve doi tuong xay dung website
const port = 3000; // tao bien

const route = require('./routes');

const db = require('./config/db');

// connect to DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));
// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
