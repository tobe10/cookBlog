const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const fileUpload = require('express-fileupload')
const session = require('express-session')
const flash = require('connect-flash')
const port = process.env.PORT || 3000;

require('dotenv').config();
// Middlewares
app.use(session({
    secret: 'blablabla',
    saveUninitialized: true,
    resave: true
}))

app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(fileUpload());
app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs')
app.set('layout', './layouts/main');
//connection
require('./server/models/database')()

// setting routes
const routes = require('./server/routes/recipeRoute')
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));