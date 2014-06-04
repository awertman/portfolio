var app = angular.module("profile",['headerFilter'] )

mainController = function($scope,portfolioContent) {
  $scope.portfolioContent = portfolioContent
  $scope.layout = 'portfolio'

}