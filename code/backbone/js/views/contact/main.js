define([
	'jQuery'
	,'Underscore'
	,'Backbone'
	,'models/contact'
	,'views/contact/subview'
	,'text!templates/contact/main.html'
	,'text!templates/contact/basic.html'
	,'text!templates/contact/green.html'
	,'text!templates/contact/blue.html'

], function(
	$
	,_
	,Backbone
	,modelContact
	,subview
	,mainHomeTemplate
	,basicTemplate
	,greenTemplate
	,blueTemplate
	){

	var view = Backbone.View.extend({
		el			: $('#page')
		,events			: {
			'click .btn-primary'	: 'saveContact'
		}
		,form		: $('form#editUser')
		,initialize	: function(){

			this.model = new modelContact();

			return this;
		}
		,saveContact: function(event){

			var data = {
				 firstname	: this.el.find('#firstname').val()
				,lastname	: this.el.find('#lastname').val()
			}

			this.model.set(data);
		}
		,testRender : function(){
			$('#age').html(50);
		}
		,render		: function(){
			this.el.html(mainHomeTemplate);

			new subview({
				model : this.model
				,el : this.el.find('.red')
				,attributes : {
					template : basicTemplate
					,color : 'red'
				}
			});

			new subview({
				model : this.model
				,el : this.el.find('.green')
				,attributes : {
					template : greenTemplate
					,color : 'green'
				}

			});

			new subview({
				model : this.model
				,el : this.el.find('.blue')
				,attributes : {
					template : blueTemplate
				}
			});

			new subview({
				model : this.model
				,el : this.el.find('.yellow')
				,attributes : {
					template : 'Hi there!!  <%= firstname %>'
				}
			});
		}
	});
	return new view;
});
