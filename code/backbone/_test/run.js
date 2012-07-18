//Main file for loading RequireJS necessary bits
QUnit = {
	config : {
	autostart : false
}}

require.config({
  'baseUrl': '../js'
  ,paths: {
		loader: 'libs/backbone/loader',
		jQuery: 'libs/jquery/jquery',
		Underscore: 'libs/underscore/underscore',
		Backbone: 'libs/backbone/backbone',
		templates: '../templates',
	_test:  "../_test"
  }
});

require([
	 'order!lib/qunit.js'
	,'order!lib/equiv.js'
	,'order!lib/pavlov.js'
	,'order!lib/sinon-1.3.1.js'

	// List out test specs:
	,'_test/spec/test_model_contact'
	,'_test/spec/test_view_main'



], function(){
	QUnit.specify.globalApi = true;
    QUnit.start(); //Tests loaded, run tests
});



