define(
[
    "views/contact/main"
],
function (view) {
    QUnit.specify.globalApi = true;
	QUnit.specify("test.test", function(){
		describe('test view.main functions', function(){
			before(function(){
				this.SUT = view;

				this.stub = sinon.stub(jQuery.prototype, 'find');
				this.stub.withArgs('#firstname').returns({ val : function(){ return 'james'}});
				this.stub.withArgs('#lastname').returns({ val : function(){ return 'brown'}});
			});

			after(function(){

			})

			it('should test saving a contact', function(){
				SUT.model = {
					set : sinon.stub()
				};
				SUT.saveContact();

				assert(SUT.model.set.calledOnce).equals(true);
				assert(stub.calledTwice).equals(true);
				assert(stub.callCount).equals(2);  // Not necessary
				assert(SUT.model.set.calledWith({ firstname : "james", lastname : "brown"})).equals(true);

			});


		});
	});

});