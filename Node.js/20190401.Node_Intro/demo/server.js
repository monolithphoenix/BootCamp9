const http = require('http');
const url = require('url');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const router = require('./routes/router')

const logger = morgan('combined');

const startServer = port => {

    //create server
    const server = http.createServer((Request, Response) => {
        
        //get route from request
        const parsedUrl = url.parse(Request.url);
            //console.log(parsedUrl);

        const getRouteFunc = router[parsedUrl.pathname] || router.default;
        
        //console information about requests
        logger(Request, Response, () => {
            getRouteFunc(Request, Response);

        //We are moved code below to '/rotes/defaults' and '/routes/cars' accordingly
            // if(parsedUrl.pathname === '/') {
            //     Response.writeHead(200, {'Content-Tipe': 'text/html'});
            //     Response.write("<h1>Module 1</h1>");
            //     Response.end();
            // };

            // if(parsedUrl.pathname === '/cars') {
            //     if(Request.method === 'GET') {
            //         const filePath = path.join(__dirname, 'db', 'cars.json');
            //         const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            //         Response.writeHead(200, {'Content-Tipe': 'aplication/json'});
            //         Response.write(JSON.stringify({ status: 'success', cars: file.cars }));
            //         Response.end();                    
            //     };
            // };
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