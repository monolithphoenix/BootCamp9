const path = require('path');
const fs = require('fs');

const getCars = (Request, Response) => {
    if(Request.method === 'GET') {
        const filePath = path.join(__dirname, '../../db', 'cars.json');
        const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        Response.writeHead(200, {'Content-Tipe': 'aplication/json'});
        Response.write(JSON.stringify({ status: 'success', cars: file.cars }));
        Response.end();                    
    };
};

module.exports = getCars;