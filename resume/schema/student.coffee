mongoose = require "mongoose"
Schema = mongoose.Schema
ObjectId = Schema.ObjectId;

schema = new Schema
  createdAt : { type: Date, "default": Date.now }

  name: String
  email: { type: String, lowercase: true }

  majors: [ String ]
  classyears: [ String ]
  degrees: [ String ]
  industries: [ String ]
  
  worktypes: [ String ]
  citizenships: [ String ]
  universities: [ String ]
  
  resume: {
    filename: String
    mimetype: String
    url: String
  }
  
mongoose.model 'student', schema
exports.schema = schema
