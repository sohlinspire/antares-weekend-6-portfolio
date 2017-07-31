var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc'
    })

    .when('/repos', {
      templateUrl: '/views/templates/repos.html',
      controller: 'UserController as uc'
    })

    .otherwise({
      redirectTo: '/user'
    });
});
