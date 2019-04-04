const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dbPath = path.join('../../', 'db/', 'cars.json');


router.get('/', (req, res) => {
    res.send('<p style="line-height:100vh; text-align:center; font-size:3rem;">CARS!!!</p>');
});

router.get('/:id', (req, res) => {
    const id = req.param.id;
    const filteredCars = filterById(id, fileData.cars);
    res.json(filteredCars);
})

module.exports = router;