var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

//Obtener usuarios
//Con router se gestionan todas las peticiones 
//Enrutador para servicios de usuarios

router.get('/',function (req, res){
    //función asincrona que retorna una promesa en then se retorna la resputa 
    usuario.find({},{_id: true, user:true, password: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;
