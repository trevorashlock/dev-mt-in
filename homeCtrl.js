angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) {
  $scope.editing = false;

  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile);
    $scope.editing = false;
  }
  $scope.myProfile = {
      "name": "Trevor Ashlock",
      "friends": [
         {name: 'Ryan'}, 
         {name: 'Bryan'}, 
         {name: 'Sarah'}, 
         {name: 'Zac'}, 
         {name: 'Erin'}
      ]
  }
  $scope.sortOptions = [{
    display: 'Ascending'
  , value: false
  },
  {
    display: 'Descending'
  , value: true
  }
];

profileService.serviceTest()
profileService.saveProfile();





})