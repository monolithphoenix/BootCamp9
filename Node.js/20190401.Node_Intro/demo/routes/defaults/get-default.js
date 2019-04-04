const getDefault = (Request, Response) => {
    Response.writeHead(200, {'Content-Tipe': 'text/html'});
    Response.write("<h1>Module 1</h1><a href='/cars'>To cars</a>");
    Response.end();
};

module.exports = getDefault;