var express = require('express');
const path = require('path');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRouter = require('./routers/usuarios-router');
const passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
const http = require('http');
const server = http.createServer(app);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


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

//routes
require('./models/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public')));

/*
app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});
*/
server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});