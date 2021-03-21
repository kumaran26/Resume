define(function(){

var coreModule = angular.module('coreModule',['ngRoute']);

coreModule.config(['$routeProvider',function($routeProvider) {
    
$routeProvider.
    when('/contact', {
        templateUrl: 'app/contact/contact.html'
    }).
	when('/objective', {
        templateUrl: 'app/objective/objective.html'
    }).
    when('/education', {
        templateUrl: 'app/education/education.html'
    }).
	when('/experience', {
        templateUrl: 'app/experience/experience.html'
    }).
	when('/personal', {
        templateUrl: 'app/personal/personal.html'
    }).
	when('/portfolio', {
        templateUrl: 'app/portfolio/portfolio.html',
		controller: 'portController'
    }).
	when('/skills', {
        templateUrl: 'app/skills/skills.html'
    }).
	otherwise({
        redirectTo: '/objective'
    });
}]);
 
 
 
 
coreModule.controller('portController',function($scope){
	
	$scope.files = [

{ xerago :	
	[
	{
		path: 'app/portfolio/assets/xerago/poland.jpg',
		name: 'Poland'
	},
	{
		path: 'app/portfolio/assets/xerago/uk.jpg',
		name: 'UK'
	},
	{
		path: 'app/portfolio/assets/xerago/uk_inter.jpg',
		name: 'UK International'
	}
	]
	
},	
{ project :	
	[
	{
		path: 'app/portfolio/assets/project/page_1.jpg'
	},
	{
		path: 'app/portfolio/assets/project/page_2.jpg'
	},
	{
		path: 'app/portfolio/assets/project/page_3.jpg'
	},
	{
		path: 'app/portfolio/assets/project/page_4.jpg'
	},
	{
		path: 'app/portfolio/assets/project/page_5.jpg'
	},
	{
		path: 'app/portfolio/assets/project/page_6.jpg'
	}
	]
	
},
{
logos :	
	[
	{
		path: 'app/portfolio/assets/logos/logo_1.png'
	},
	{
		path: 'app/portfolio/assets/logos/logo_2.png'
	},
	{
		path: 'app/portfolio/assets/logos/logo_3.png'
	},
	{
		path: 'app/portfolio/assets/logos/logo_4.png'
	},
	{
		path: 'app/portfolio/assets/logos/logo_5.png'
	}
	]	
}
];
	
});




coreModule.controller('validateCtrl', function($scope) {
    $scope.user = '';
    $scope.email = '';
}); 




coreModule.directive('routeLoadingIndicator', function($rootScope) {
  return {
    restrict: 'E',
    template: "<div ng-show='isRouteLoading' class='loading-indicator'>" +
   
    "<h3 class='loading-title'>Loading...</h3>" +
    "<div class='spinner'><rotating-plane-spinner></rotating-plane-spinner></div>" +
    
    "</div>",
    replace: true,
    link: function(scope, elem, attrs) {
      scope.isRouteLoading = false;
 
      $rootScope.$on('$routeChangeStart', function() {
        scope.isRouteLoading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        scope.isRouteLoading = false;
      });
    }
  };
});



});