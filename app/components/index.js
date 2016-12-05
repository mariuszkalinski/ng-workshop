import angular from 'angular';
import MainLayout from './main-layout';

const components = angular
.module('ecovadis-bi.components', [
  MainLayout,
])
.name;

export default components;
