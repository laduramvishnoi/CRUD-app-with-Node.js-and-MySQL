
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');


var customers = require('./routes/customers'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');


app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));


if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'databasename'

    },'pool') //or single

);



app.get('/', customers.list); //if wanted to add for different page then route.index .. create new js file in route folder. 
//app.get('/customers', customers.list); can add this one to add application in different page 
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id',customers.save_edit);


app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Your Application running on  ' + app.get('port'));
});
