var mongoose = require('mongoose');
var objectId = mongoose.Schema.Types.ObjectId;

var companySchema = mongoose.Schema({
    name: {type: String, required: true},
    booth: {type: Number, required: true}
});

module.exports = mongoose.model('Company', companySchema);
