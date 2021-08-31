var express = require('express');
var router = express.Router();
var data = require('../services/data')

router.post('/', data.postData)

module.exports = router;
