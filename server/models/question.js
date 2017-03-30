var mongoose = require('mongoose')
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
  question:{type:String, required:true},
  description:{type:String},
  _user:{type:Schema.Types.ObjectId, ref:"User"},
  _answers:[{type:Schema.Types.ObjectId, ref:"Answer"}],
},{timestamps:true})
mongoose.model("Question",QuestionSchema)
