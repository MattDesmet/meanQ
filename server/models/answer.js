var mongoose = require('mongoose')
var Schema = mongoose.Schema
var AnswerSchema = new Schema({
  answer:{type:String, required:true},
  details:{type:String},
  name:{type:String},
  _user:{type:Schema.Types.ObjectId, ref:"User"},
  _question:{type:Schema.Types.ObjectId, ref:"Question"},
  likes:{type:Number, default:0},
},{timestamps:true})
mongoose.model("Answer",AnswerSchema)
