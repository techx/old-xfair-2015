var express = require('express');
var router = express.Router();
var company = require('../controller/company');

router.get('/', company.getAll);

router.get('/:companyId', company.getOne);

module.exports = router;