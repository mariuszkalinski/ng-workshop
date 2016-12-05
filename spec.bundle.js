import angular from 'angular';

// Built by the core Angular team for mocking dependencies
import mocks from 'angular-mocks';


let context = require.context('./app', true, /\.spec\.js/);

context.keys().forEach(context);
