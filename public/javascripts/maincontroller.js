var app = angular.module("profile",['headerFilter'] )

mainController = function($scope,portfolioContent) {
  $scope.portfolioContent = portfolioContent
  $scope.updateViewHeight = function() {
    window.scrollTo(0,0)
  }

  $scope.layout = 'about'

}