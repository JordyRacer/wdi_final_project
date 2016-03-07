angular
	.module('app',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
	
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'/partials/home.html',
				controller: 'homeCtrl as ctrl'
			})
			.state('login',{
				url:'/login',
				templateUrl:'/partials/login.html',
				controller: 'loginCtrl as ctrl'
			})
			.state('viewA',{
				url:'/viewA',
				templateUrl:'/partials/viewA.html',
				controller: 'viewACtrl as ctrl'
			})
			.state('viewB',{
				url:'/viewB',
				templateUrl:'/partials/viewB.html',
				controller: 'viewBCtrl as ctrl'
			})
			.state('viewC',{
				url:'/viewC',
				templateUrl:'/partials/viewC.html',
				controller: 'viewCCtrl as ctrl'
			})
			.state('editA',{
				url:'/editA',
				templateUrl:'/partials/editA.html',
				controller: 'editACtrl as ctrl'
			})
			.state('editB',{
				url:'/editB',
				templateUrl:'/partials/editB.html',
				controller: 'editBCtrl as ctrl'
			})
			.state('editC',{
				url:'/editC',
				templateUrl:'/partials/editC.html',
				controller: 'editCCtrl as ctrl'
			})
});
