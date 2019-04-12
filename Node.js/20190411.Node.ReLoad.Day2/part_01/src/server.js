const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const usersDBPath = path.join(__dirname, 'db/', 'users.json')
const usersData = JSON.parse(fs.readFileSync(usersDBPath, 'utf-8'));

const createServer = port => {

    app.use(bodyParser.json())

    app.get('/users', (req, res) => {
        res.json(usersData);
    });
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        const filterArr = usersData.users.filter(el => el.id === id);
        res.json({ user: filterArr })
    });

    app.put('/users/:id', (req, res) => {
        
    })

    app.listen(port, () => {
        console.log(`Sever started at ${port} port`);
    });

}

module.exports = createServer;