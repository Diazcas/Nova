const usuario = require('./usuario');
const Usuarios = require('./usuario');


module.exports = (app, passport) => {
    app.get ('/', (req, res) => {
        res.render('index');
    });

    app.get ('/principal', (req, res) => {
        res.render('principal', {
        });
    });

    app.get ('/registro', (req, res) => {
        res.render('registro', {
        });
    });

    app.get ('/login', (req, res) => {
        res.render('login', {
        });
    });

    app.get ('/salonBelleza', (req, res) => {
        res.render('citaSalonBelleza', {
        });
    });

    app.get ('/restaurante', (req, res) => {
        res.render('restaurante', {
        });
    });

    app.post ('/registro', passport.authenticate('local-signup', {
        succesRedirect: '/principal',
        failureRedirect: '/registro',
        failureFlash: true
    }));

    app.post('/agregarUsuario', (req, res) => {
        console.log('POST /model/agregarUsuario');
        console.log(req.body);
    
        let usuario = new Usuarios()
        usuario.nombreEmpresa = req.body.user
        usuario.email = req.body.email
        usuario.password = req.body.password
        usuario.telefono = req.body.telefono
        usuario.direccion = req.body.direccion
    
        usuario.save((err) => {
            if (err) {
                res.render('registro'), {
                    message: req.flash('error')
                };
            } else {
                res.render('principal'), {
                    message: req.flash('exito')
                };
            }
        });
    });

    app.post('/verificarLogin', (req, res) => {
        let usuarioUser =  req.body.user
        let usuarioPassword =  req.body.password
        console.log(usuarioUser, usuarioPassword);
        Usuarios.findOne({ email: usuarioUser, password: usuarioPassword }, function (err, usuario1) {
            console.log(usuario1);
            if (usuario1 == null){
                res.render('login');
            } else {
                res.render('principal');
            }
        });
    });
};