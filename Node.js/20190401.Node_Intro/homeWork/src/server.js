const http = require('http');
const url = require('url');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const router = require('./routes/router');

const logger = morgan('combined');

const startServer = port => {

    //create server
    const server = http.createServer((Request, Response) => {
        
        //get route from request
        const parsedUrl = url.parse(Request.url);

        const getRouteFunc = router[parsedUrl.pathname] || router.main;
        
        //console information about requests
        logger(Request, Response, () => {
            getRouteFunc(Request, Response);
        })
    });

    server.listen(port, err => {
        if(err) {
          return console.log('что-то пошло не так');
        }
        console.log(`server is listening on ${port}`);
        });

};

module.exports = startServer;