const getDefault = require('./defaults/get-default');
const getCars = require('./cars/get-cars');

const router = {
    'default': getDefault,
    '/cars': getCars,
};

module.exports = router;