var app = angular.module('app',['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
  .when("/login",{
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html'
  })
  .when('/add',{
    templateUrl: 'partials/add.html'
  })
  .when('/answer/:id',{
    templateUrl: 'partials/answer.html'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html'
  })
  .when('/test',{
    templateUrl: 'partials/testRouting.html'
  })
  // .when('/test',{
  //   templateUrl: 'partials/testRouting.html'
  // })
  .otherwise({
    redirectTo: '/login'
  })
})
