var mongoose = require('mongoose')
var User = mongoose.model("User")
var Question = mongoose.model("Question")
var Answer = mongoose.model("Answer")
module.exports = (function(){
  return{
    add:function(request,response){
      console.log(request.body)
      console.log(request.session.user.name);
      request.body.name = request.session.user.name

      var answer = new Answer(request.body)
      answer.save(function(err,answerData){
        // console.log(answerData);
        User.findOne({_id:answerData._user},function(err,userData){
          // console.log(userData);
          userData._answers.push(answerData._id)
          userData.save(function(err){
            Question.findOne({_id:answerData._question},function(err,questionData){
              // console.log(questionData);
              questionData._answers.push(answerData._id)
              questionData.save(function(err){
                response.json(answerData)
              })
            })
          })
        })
      })
    },
    like:function(request,response){
      Answer.findById({_id:request.body._id},function(err,answer){
        answer.likes += 1
        answer.save(function(err){
          response.json(answer)
        })
      })
    }
  }
})()
