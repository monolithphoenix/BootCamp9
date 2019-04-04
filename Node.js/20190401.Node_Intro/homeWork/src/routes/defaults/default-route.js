const main = (req, res) => {
    res.writeHead(200, {'Content-Tipe': 'text/html'});
    res.write("<h1>Pizza</h1><a href='/products'>To our products</a><p><a href='/signup'>or Sign Up</a></p>");
    res.end();
};

module.exports = main;