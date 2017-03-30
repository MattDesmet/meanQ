var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TestingSchema = new Schema({
  stringTest:{type:String, required:true},
  // numberTest:{type:Number},
},{timestamps:true})


mongoose.model("TestServ",TestingSchema)


console.log('test MONGOOSE AND SCHEMA file is working');
