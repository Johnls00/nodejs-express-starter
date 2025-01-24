var express = require('express');
var router = express.Router();

// Route to render the login page
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;