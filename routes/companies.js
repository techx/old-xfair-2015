var express = require('express');
var router = express.Router();
var company = require('../controller/company');

router.get('/', company.getAll);

router.get('/:companyName/:booth', company.getOne);

router.post('/', company.add);

router.put('/', company.edit);

module.exports = router;