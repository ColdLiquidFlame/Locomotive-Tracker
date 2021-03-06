angular.module('myApp.navbars', ['authentication-factory', 'mgcrea.ngStrap.navbar'])

.controller('NavBarCtrl', ['$scope', '$location', 'Auth', '$rootScope', function($scope, $location, Auth, $rootScope) {  
  $scope.loginWithPassword = function(user) {
    Auth.login('password', user);
  };
  
  $scope.loginWithFacebook = function() {
    Auth.login('facebook');
  };
  
  $scope.loginWithGoogle = function() {
    var options = {
      scope: 'profile'
    };
    
    Auth.login('google', options);
  };
  
  $scope.logout = function() {
    Auth.logout();
  };
}]);