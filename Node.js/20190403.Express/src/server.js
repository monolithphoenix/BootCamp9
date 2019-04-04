const express = require('express');
const app = express();
const birdRouter = require('./routes/birds/bird-routes');
const carsRouter = require('./routes/cars/cars-routes');
const newCarRouter = require('./routes/cars/cars-router');

const startServer = port => {
    app.get('/', function(req, res) {
        res.send('<style>a, h1 {margin-top: 80px; font-family: Roboto, sans-serif; text-align: center; display: block;}</style><h1>OMG, it`s a Node.js!!!</h1> <a href="/bird">Go to bird</a> <br /> <a href="/cars">Go to cars</a> <a href="/newcars">Go to newcars</a>');
    });

    app.get('/cars/:category/:id', function (req, res) {
        const id = req.params;
        console.log('id:', id);
        console.log('category', req.query.category);
        
        // const category = req.
    })

    app.use('/bird', birdRouter);
    app.use('/cars', carsRouter);
    app.use('/newcars', newCarRouter)


    app.listen (port, function() {
        console.log("App listening on port:" + port);
        
    });
};

module.exports = startServer;