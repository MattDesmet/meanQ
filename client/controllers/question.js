app.controller('questionController',function($scope,questionFactory,$location,$routeParams){
  $scope.errors = []
  if($routeParams.id){
    // console.log($routeParams.id);
    questionFactory.getAll(function(data){
      $scope.questions = data
      for(question in $scope.questions){
        if($scope.questions[question]['_id']==$routeParams.id){
          $scope.cur_question = $scope.questions[question]
          // console.log($scope.cur_question);
        }
      }
    })
  }
  else{
    questionFactory.getAll(function(data){
      $scope.questions = data
    })
  }
  $scope.addQuestion = function(id){
    $scope.errors = []
    if(!$scope.newQuestion){
      $scope.errors.push("Please fill your question")
    }
    else if(!$scope.newQuestion.question || $scope.newQuestion.question.length < 10){
      $scope.errors.push("Question must be at least 10 characters")
    }
    else{
      $scope.newQuestion._id = id
      questionFactory.addQuestion($scope.newQuestion,function(){
        questionFactory.getAll(function(data){
          $scope.questions = data
        })
      })
      $scope.newQuestion = []
      $location.url('/dashboard')
    }
  }
  $scope.answer = function(id){
    // console.log(id);
    questionFactory.answer(id)
  }
  $scope.show = function(id){
    // console.log(id);
    questionFactory.show(id)
  }
})
