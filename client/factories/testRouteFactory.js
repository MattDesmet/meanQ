app.factory('testFac', function($http, $route, $location) {
var factory = {};

  factory.checkinguser = function(cb) {
    // console.log('this is the CB from factory test');
    $http.get('/ROUTE_checkinguser').then(function(output) {
      cb(output)
    }) // sent test to routes.js
  }

  factory.addToDb = function(route_test_data){
      // console.log('this is the new backendTest function talking');
      $http.post('/ROUTE_TEST_ADD_USER',route_test_data).then(function(output) {
        // $location.url('/test')
        console.log('VAL of output in Factory; ',output);
        $location.url('/dashboard')
        // $location.url('/answer/58daa8fdcadf7509408dbdbd')
      })
  }



return factory;
});

console.log('test FACTORY is working');
