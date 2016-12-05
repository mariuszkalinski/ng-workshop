import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate';
import AppComponent from './app.component';
import Common from './common';
import Components from './components';


// create our app module and setup core dependencies
angular.module('ecovadis-bi', [

  uiRouter,
  animate,
  Common,
  Components,
])

.config(($urlRouterProvider, $locationProvider) => {
  'ngInject';

  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true);

  // setup default route
  $urlRouterProvider.otherwise('/');
})

// setup root component

.component('app', AppComponent);
