define([
	'Underscore',
	'Backbone'
], function (_, Backbone) {
	var model = Backbone.Model.extend({
		defaults : {
			firstname : ''
			,lastname : ''
		}
		,initialize:function () {
			return this;
		}
		,doSomething	: function(){
			this.showAlert('james');
		}
		,showAlert		: function(text){
			alert(text);
		}
	});
	return model;
});
