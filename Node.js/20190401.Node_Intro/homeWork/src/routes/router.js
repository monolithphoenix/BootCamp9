const main = require('./defaults/default-route');
const addUser = require('./signup/signup-route');
const getProducts = require('./products/products-route');

const router = {
    main,
    '/products': getProducts,
    '/signup': addUser,
};

module.exports = router;