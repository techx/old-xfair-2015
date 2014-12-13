path = require "path"

# set up express
express = require "express"
bodyParser = require 'body-parser'
app = express()
app.use bodyParser.json()
# view engine setup
app.set "views", path.join(__dirname, "views")
app.set "view engine", "jade"


# set up mongo
mongouri = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || "mongodb://localhost/xfair"
mongoose = require "mongoose"
mongoose.connect mongouri

require './schema/student'

Student = mongoose.model 'student'
# set up rest api
app.post "/drop", (req,res)->
  Student.findOneAndUpdate email:req.body.email,req.body,upsert:true
  .exec().then (result)->
    res.send result.toObject()
  , (err)->
    res.status(500).send({ error: err.toString()})

app.post "/search", (req,res)->
  Student.find (req.body || {})
  .exec().then (results)->
    res.send results
  , (err)->
    res.status(500).send({ error: err.toString()})

# set up route
app.get "/drop", (req,res)->
  res.render 'drop.jade'
  
app.get "/browse", (req,res)->
  res.render 'browse.jade'
  
app.use express.static(path.join(__dirname, "public"))

module.exports = app;