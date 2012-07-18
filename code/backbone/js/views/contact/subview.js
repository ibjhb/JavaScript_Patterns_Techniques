define([
	'jQuery',
	'Underscore',
	'Backbone'
], function($, _, Backbone){
	var view = Backbone.View.extend({
		initialize: function(){
			this.model.bind('change', this.render, this);
			return this;
		}
		,events			: {
			'click'	: 'showAlert'
		}
		,render: function(){
			var compiledTemplate = _.template( this.attributes.template, this.model.toJSON() );
			this.el.html( compiledTemplate );
		}
		,showAlert : function(){
			alert(this.attributes.color);
		}

	});
	return view;
});
