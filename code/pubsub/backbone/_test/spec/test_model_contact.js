define(
[
    "models/contact"
],
function (model) {
    QUnit.specify.globalApi = true;
	QUnit.specify("test.test", function(){
		describe('test model.contact functions', function(){
			before(function(){
				this.SUT = new model();
				this.stub = sinon.stub(SUT, 'showAlert');
			});
			
			after(function(){
				this.stub.restore();
			})

			it('should test the  defaults', function(){
				assert(SUT.get('firstname')).equals('');
				assert(SUT.get('lastname')).equals('');
			});

			it('should test the doSomething', function(){
				SUT.doSomething();
				assert(stub.calledOnce).equals(true);
			});
		});
	});	 
    
});