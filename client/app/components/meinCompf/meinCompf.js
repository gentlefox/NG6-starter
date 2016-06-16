import angular from 'angular';
import 'angular-ui-router';
import meinCompfComponent from './meinCompf.component';

let meinCompfModule = angular.module('meinCompf', [
	'ui.router'
])
.directive('meinCompf', meinCompfComponent);

export default meinCompfModule;