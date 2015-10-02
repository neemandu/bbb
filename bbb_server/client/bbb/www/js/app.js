// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular.module('starter', ['ionic','ionic.service.core','ngCordova','ionic.service.push', 'lbServices', 'ui.bootstrap.datetimepicker'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    
  });
})

.config(function(LoopBackResourceProvider) {
 
    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
 
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://192.168.43.214:3000/api/');
  })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider



  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html'
  })

  .state('addGroup', {
      url: '/addGroup',

          templateUrl: 'templates/addGroup.html',
          controller: 'addGroupCtrl'

    })

    .state('groups', {
      url: '/groups',
          templateUrl: 'templates/groups.html',
          controller: 'GroupsCtrl',
          cache: false
    })

    .state('groupDetails', {
      url: '/groups/:groupId',
          templateUrl: 'templates/groupDetails.html',
          controller: 'groupDetailsCtrl',
          cache: false
 
    })

    .state('addEvent', {
      url: '/groups/:groupId/addEvent',
          templateUrl: 'templates/addEvent.html',
          controller: 'addEventCtrl'
 
    })
    .state('events', {
      url: '/groups/:groupId/events/:eventId',
          templateUrl: 'templates/eventDetails.html',
          controller: 'eventDetailsCtrl'
 
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('groups');
});
