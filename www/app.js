angular.module('myApp', ['ngRoute',                          
                         /*** Components ***/
                         'modify-item-directive',  
                         'item-service', 
                         'list-item-directive', 
                         'authentication-factory',
                         /*** Views ***/
                         'myApp.main', 
                         'myApp.lists', 
                         'myApp.navbars',
                         'myApp.login',
                         'myApp.register'

                        ])

.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, next, current, error) {
    if (error === 'AUTH_REQUIRED') {
      $location.path('/login' + next.$$route.originalPath);
    }
  });
}])

/**** Configuration ****/
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.otherwise({redirectTo: '/main'});
}]);