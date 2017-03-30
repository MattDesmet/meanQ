app.controller('tc', function($scope, testFac) {
    // $scope.currentUser = null
    $scope.Received_data = {daataaSet: 'Shipped Data String'}
      testFac.checkinguser(function(Received_data){
        $scope.currentUser = Received_data;
        // console.log('CURRENT VAL of scope.curuser:::', Received_data.data);
        // console.log('OUTPUT VAL of scope.currentUser:', $scope.currentUser.data);
      });
    $scope.backendTest = function(){
      // console.log($scope.route_test_data);
      testFac.addToDb($scope.route_test_data)
    }
})

console.log('test CONTROLLER is working');
// console.log($scope.Received_data);
