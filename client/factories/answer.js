app.factory('answerFactory',function($http){
  var factory = {}
  factory.addAnswer = function(answer, callback){
    // console.log(answer, 'in factory');
    $http.post('/answer/add',answer).then(function(output){
      // console.log(output.data);
      callback()
    })
  }
  factory.like = function(answer,callback){
    $http.post('/answer/like',answer).then(function(output){
      callback(output.data)
    })
  }
  return factory
})
