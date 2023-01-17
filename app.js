const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
// Middlewares
app.use(express.urlencoded({ extended: true }));
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