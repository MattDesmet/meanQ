app.controller ('answerController', function($scope,answerFactory,$location,$route){
  $scope.errors = []
  $scope.addAnswer = function(question,user,answer){
    // console.log(question,user,answer);
    $scope.errors = []
    if(!$scope.newAnswer){
      $scope.errors.push("Please fill out your answer")
    }
    else if(!$scope.newAnswer.answer || $scope.newAnswer.answer.length < 5){
      $scope.errors.push("Please enter an answer longer than 5 characters")
    }
    else{
      answer._user = user
      answer._question = question
      answerFactory.addAnswer(answer, function(){
        $scope.newAnswer = {}
        $location.url('/dashboard')
      })
    }
  }
  $scope.like = function(answer){
    // console.log(answer);
    answerFactory.like(answer,function(data){
      $route.reload()
    })
  }
})
