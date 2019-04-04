const path = require('path');
const fs = require('fs');

const getProducts = (req, res) => {
    if(req.method === 'GET') {
        const filePath = path.join(__dirname, '../../db', 'products-mock.json');
        const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log(file);

        res.writeHead(200, {'Content-Tipe': 'aplication/json'});
        res.write(JSON.stringify({ status: "success", products: file.products }));
        res.end();                    
    };
};


module.exports = getProducts;