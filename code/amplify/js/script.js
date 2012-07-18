// Show console.log
// Show no subscribe
// Show multiple publish with different name & timeout
// Show multiple subscribe

$(function(){

	amplify.subscribe('user:changed', function(user){
		$('#firstname').html(user.firstname);
	});

	amplify.subscribe('user:changed', function(user){
		$('#lastname').html(user.lastname);
	});

	setTimeout(function(){
		amplify.publish('user:changed', { firstname : 'James', lastname : 'Brown'});
	}, 2000);

	setTimeout(function(){
		amplify.publish('user:changed', { firstname : 'Aaron', lastname : 'Greenlee'});
	}, 4000);

});