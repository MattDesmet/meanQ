var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TestUserSchema = new Schema({
  name:{type:String},
  // name:{type:String, required:true},
  // numberTest:{type:Number},
},{timestamps:true})

// this is declaring the name of this schema and then passing this actual schema.
mongoose.model("This_Is_Schema",TestUserSchema);
