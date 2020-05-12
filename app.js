const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/game.routes');
const bodyParser = require('body-parser');
const session = require('express-session');

function setupApp(){
	app.use(cors());
   // app.use(localHostHandler);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    //app.use(session({secret: 'secret-word', resave: false, saveUninitialized: true, cookie: { secure: false, httpOnly: false }}))

   // var sess = {
    //	secret: 'secret-word',
    //	cookie: {}
    //}

    //if (app.get('env') === 'production') {
    //	app.set('trust proxy', 1) // trust first proxy
    	//sess.cookie.secure = false // serve secure cookies
	//}

	//app.use(session(sess))

    //app.use(session({cookie: {secure: false}})); 

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

