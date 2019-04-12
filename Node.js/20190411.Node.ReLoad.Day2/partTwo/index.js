const express = require('express');
const app = express();
const logger = require('morgan');

const router = require('./routes');

app.use(logger('tiny'));
app.use(express.json());
app.use('/', express.static('client'));

app.use('/assets/video', express.static('assets/video'));

app.use('/assets/audio', express.static('assets/audio'));

app.use('/api', router);

app.listen(3210, () => {
    console.log('Serverstarted on 3210 port');    
})

// const startServer = require('./server');
// startServer(3210);