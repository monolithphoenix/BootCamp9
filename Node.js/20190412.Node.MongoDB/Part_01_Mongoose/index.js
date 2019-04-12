const express = require('express');
const mongoose = require('mongoose');

const url = require('./red');

const app = express();
const Schema = mongoose.Schema();

mongoose.connect(
    url,
    {useNewUrlParser: true},
    err => {
        if (err) console.log(err);
        console.log('Connected to MongoDB');        
    }
);

const UsersSchema = new mongoose.Schema({
    email: String,
    name: String,
    pass: String,
    tel: Number
});

const UserModel = mongoose.model('User', UsersSchema); // 'User' - will be a name of collection in lowercase

    app.use(express.json());

    app.get('/', (req, res) => {
        // res.send('Welcome on MAIN page')
        UserModel.find({}, (err, docs) => {
            if (err) console.log(err);
            res.json(docs);            
        })
    });

    app.get('/:id', (req,res) => {
        const id = req.params.id;
        UserModel.findById(id, 'name email', (err, doc) => {
            console.log(doc);
            
            // const { email, name } = doc;
            // res.send( `Hi, ${name}. Your  email is ${email}.` );
            res.send(`Hi, ${doc.name}. Your  email is ${doc.email}`);
        })
    });

    app.post('/', (req, res) => {
        // console.log(req.body);
        // res.json(req.body);   
        // const { email, name, pass, tel } = req.body;

        const body = req.body;
        const newUser = new UserModel(body);
        console.log(newUser);
        newUser.save((err, product) => {
            if (err) console.log(err);
            console.log(product);            
        });
        
    });
    

const serverStart = port => {
    app.listen(port, () => {
        console.log(`Server started at ${port} port`)
    });
};

serverStart(4321);