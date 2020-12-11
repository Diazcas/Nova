var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'nova';

class Database{
    constructor(){
        //Promesas
        //mongoose.connect(`mongodb://${servidor}/${db}`)
        mongoose.connect(`mongodb+srv://Nova:Nova12345@cluster0.a1h5g.mongodb.net/nova?retryWrites=true&w=majority`)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();