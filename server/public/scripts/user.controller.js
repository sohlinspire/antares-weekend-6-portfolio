myApp.controller('UserController', function(GithubService){
  console.log('UserController loaded.')
  var vm = this;
  vm.user = GithubService.user;
});
