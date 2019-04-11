const http = require('http');

const startServer = port => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Node.js are started. My congrats!');
    })

    server.listen(port, err => {
        err ?
            console.log('Something going wrone!..') :
                console.log(`Server started on ${port} port`);
    })
}

module.exports = startServer;