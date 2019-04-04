const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const filePath = path.join(__dirname, '../../db/cars.json');
const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const getById = (id, arr) => {
    return arr.filter(el => el.id === id);
};

const getQueryElements = query => {
    query.trim().replace(/['"]/g, '').split(',');
};

const filterMulty = (qweryArr, arrEl) => {
    arrEl.filter(el, qweryArr.includes(el));
};

router.get('/', (req, res) => {
    const query = req.query;
    console.log('query: ', query);
    
    if(query.ids) {
        const qweryArr = getQueryElements(query.ids);
        
        console.log('getQueryElements: ', getQueryElements(query));


    }
    console.log('search: ', req.search);

    res.status(200).send(fileData.cars);
    res.end();
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const filteredCars = getById(id, fileData.cars);
    console.log(filteredCars);
    res.json(filteredCars[0].mark);
    res.end();
});



module.exports = router;