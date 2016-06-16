import template from './meinCompf.html!text';
import controller from './meinCompf.controller';
import './meinCompf.css!';

let meinCompfComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default meinCompfComponent;
