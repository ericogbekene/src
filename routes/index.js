const express = require('express');
const router = express.Router();
const { getHelloWorld } = require('../controllers/index');
const { postUser } = require('../controllers/index');

// Define API endpoints
router.get('/hello', getHelloWorld);
router.post('/users', postUser);


// Export the router
//module.exports = router;

module.exports = (app) => {
    app.use('/', router);
};