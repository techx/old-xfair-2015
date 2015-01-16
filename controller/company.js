var Company = require('../model/company');

var company = {};

company.getAll = function(req, res) {
    Company.find(function(err, companies) {
        res.send(companies);
    });
} 

company.getOne = function(req, res) {
    Company.find({booth: req.params.booth}, function(err, company) {
        res.send(company);
    });
}

company.add = function(req, res) {
    Company.create({booth: req.body.booth, name: req.body.name}, function(err, company) {
        res.send(company);
    });
}

company.edit = function(req, res) {
    Company.update({booth: req.body.booth}, {name: req.body.name}, function(err, company) {
        res.send(company);
    });
}

module.exports = company;