const path = require('path');
const fs = require('fs');

const user = {
    "username": "Ivan",
    "telephone": "063 777 77 77",
    "password": "12345",
    "email": "ivan@gmail.com"
   }

const saveUser = user => {
    const filePath = path.join(__dirname, '../../', 'db/users', `${user.username}.json`)
    fs.writeFile(filePath, JSON.stringify(user), function (err) {
        if (err) throw err;
        console.log('User created!!!');
    })
}

const addUser = (req, res) => {
    // console.log(req);
    // console.log(req.method);
    
    if(req.method === 'POST') {
        let body = '';
        let filePath = '';
        req.on('data', function(data) {
            body = data;
            console.log('Incoming data!!!');
        });
        
        req.on('end', function() {
            console.log('data_body', JSON.parse(body));
            const userData = JSON.parse(body);
            
            saveUser(userData);
            
            const responceData = {
                status: "success",
                user: userData
            };

            res.writeHead(200, {'Content-Tipe': 'aplication/json'});
            res.write(JSON.stringify(responceData));
            res.end();
        });

        // res.writeHead(200, {'Content-Tipe': 'aplication/json'});
        // res.write(JSON.stringify({ status: 'success', user: file }));
        // res.end(); 
    };
};

module.exports = addUser;