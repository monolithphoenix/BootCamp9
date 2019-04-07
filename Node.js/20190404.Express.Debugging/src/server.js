const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs  = require('express-handlebars');



const app = express();
const randomColor = () => {return `${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;};

const startServer = port => {

    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.render('home');
        // debugger;
        // res.send(`<p style="background-color: rgb(${randomColor()}); line-height:90vh; text-align:center; font-size:3rem;">Root page</p>`);
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.post('/user', (req, res) => {
        const dbUserPath = path.join(__dirname, '/db/users/');
        const body = req.body;
        
        console.log(body.userName);
        if(req.body && req.body.userName) {
            console.log('worki');
            
            fs.writeFileSync(`${dbUserPath}${body.userName}.json`, JSON.stringify(body));
        }
        res.send(`<p style="background-color: rgb(${randomColor()}); line-height:90vh; text-align:center; font-size:3rem;">${body.userName}</p>`);
        res.end();        
    });

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // app.use()

    app.listen(port, () => {
        console.log('Server is listerning on ', port, ' port');        
    });
};

module.exports = startServer;