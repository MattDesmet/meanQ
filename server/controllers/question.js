var mongoose = require('mongoose')
var Question = mongoose.model("Question")
var User = mongoose.model("User")
module.exports = (function(){
  return{
    add:function(request,response){
      // console.log(request.body);
      var question = new Question({question:request.body.question, _user:request.body._id, description: request.body.description})
      // console.log(question);
      question.save(function(err,data){
        User.findOne({_id:request.body._id},function(err,user){
          // console.log(user);
          user._questions.push(data._id)
          user.save(function(err,userData){
            response.json(data)
          })
        })
      })
    },
    getAll:function(request,response){
      Question.find({})
      .populate('_user')
      .populate('_answers')
      .exec(function(err,questions){
        response.json(questions)
      })
    }
  }
})()
