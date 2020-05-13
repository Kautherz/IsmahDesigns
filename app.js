const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/game.routes');
const bodyParser = require('body-parser');
const session = require('express-session');

function setupApp(){
	app.use(cors({credentials: true, origin: true}));
   // app.use(localHostHandler);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    const sessionConfig = { secret:'secret-word', resave:false, saveUninitialized:true };
    app.use(session(sessionConfig) );
    app.use('/', routes);  
}

setupApp();

app.listen(port);
console.log(`Server is running on port ${port}...`);

function localHostHandler(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    next();
}

