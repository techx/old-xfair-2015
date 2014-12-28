var Company = require('../model/company');

var company = {};

company.getAll = function(req, res) {
    Company.showAll(function(err, companies) {
        res.send(companies);
    });
} 

company.getOne = function(req, res) {
    Task.show(req.params.companyId, function(err, company) {
        res.send(company);
    });
}

module.exports = company;