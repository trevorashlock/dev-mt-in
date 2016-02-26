angular.module('devMtIn')
angular.module.service('profileService', function() {
this.serviceTest = function() {
  console.log('profileService is connected!');
}



 this.saveProfile = function( profile ) {
		localStorage.setItem('profile', JSON.stringify(profile));
	}

	this.checkForProfile = function() {
  if (localStorage.getItem('profile')) {
    return JSON.parse(localStorage.getItem('profile'));
  }
  return {
    friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
  }
}
});