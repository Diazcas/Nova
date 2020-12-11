var express = require('express');
const path = require('path');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRouter = require('./routers/usuarios-router');
const passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//middleware
//app.use('/usuarios', usuariosRouter);

//routes
require('./models/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});