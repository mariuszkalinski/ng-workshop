import angular from 'angular';
import MainLayoutComponent from './main-layout.component';

const mainLayout = angular
  .module('mainLayout', [])
  .component('mainLayout', MainLayoutComponent)
  .name;

export default mainLayout;
