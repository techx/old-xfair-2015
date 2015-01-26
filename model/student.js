var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
  	},
  	name: String,
  	email: {
    	type: String,
    	lowercase: true
  	},
  	majors: [String],
  	classyears: [String],
  	degrees: [String],
  	industries: [String],
  	worktypes: [String],
  	citizenships: [String],
  	universities: [String],
  	resume: {
	    filename: String,
	    mimetype: String,
	    url: String
  	}
});

var Student = mongoose.model('Student', schema);

module.exports = Student;
