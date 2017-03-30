app.factory('questionFactory',function($http,$location){
  var factory = {}

  factory.getAll = function(callback){
    $http.get('/question/getall').then(function(output){
      callback(output.data)
    })
  }
  factory.addQuestion = function(question,callback){
    $http.post('/question/add',question).then(function(output){
      callback()
    })
  }
  factory.answer = function(id){
    // console.log(id, 'in factory');
    $location.url('/answer/'+id)
  }
  factory.show = function(id){
    $location.url('/show/'+id)
  }
  return factory
})
