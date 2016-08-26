const app = angular.module('PuppyClicker', []);

app.controller('ClickerController', ['$scope', function($scope){
  $scope.clicks = 0;
  $scope.handleClick = () => $scope.clicks++;
}]);
