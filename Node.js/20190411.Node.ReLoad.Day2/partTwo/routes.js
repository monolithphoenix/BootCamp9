const express = require('express');
const router = express.Router();

router.get('/video', (req, res) => {
    console.log(req.body);
    res.json(req.body);    
})

router.get('/audio', (req, res) => {
    console.log(req.body);
    res.json(req.body);    
})


module.exports = router; 