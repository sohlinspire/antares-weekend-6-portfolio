console.log('test');

var myApp = angular.module('myApp', []);


myApp.controller('NameController', function($http) {
  $http({
    method: 'GET',
    url: 'https://api.github.com/users/mhwalsh/repos',
    headers: {
    'Authorization': 'token 25636dcb5d81019574277cd51f0fda58d3297f94'}
    }
  ).then(function(response) {
    console.log(response);
  });
});
