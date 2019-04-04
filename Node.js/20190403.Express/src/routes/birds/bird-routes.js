const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1 style="color: red">Well everybody knows, that the bird is the word!!!</h1> <a href="/bird/about">about</a>');
});

router.get('/about', (req, res) => {
    res.send('About <h2 style="display:inline-block; color:blue;">the bird</h2>, <a href="/bird">bird</a>, bird, b-bird is the word...')
});

module.exports = router;