var app = angular.module("profile",['headerFilter'] )

mainController = function($scope,portfolioContent) {
  $scope.portfolioContent = portfolioContent
  $scope.updateViewHeight = function() {
    if(event.target.href) {
      window.scrollTo(0,0)
    }
  }

  $scope.layout = 'about'

}