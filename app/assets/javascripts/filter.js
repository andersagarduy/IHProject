$(document).ready(function() {	
	$('#filter-form-tag').submit(function (event) {
		event.preventDefault();
		var formObj = $(this);
		var formURL = formObj.attr("action");
		var formData = formObj.serializeArray();

		$.ajaxSetup({
		  headers: {
		    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
		  }
		});
		
		$.ajax({
			url: formURL,
			type: 'POST',
			data: formData,
			success: function(data)
		    {
		    	console.log(data);
		
		    	if (data != 'object') {
					$('#filter-errors').html('<p>' + "Error, Usuario No Existe!" + '</p>')
					setTimeout(function () {
					$('#filter-errors').remove();
				    }, 5000);	
				}

		    	data.forEach(function(worker){
		    		
		    		$.ajax({
		    			url: "/user_json.json", 
		    			type: 'POST',
		    			data: formData, 
		    			success: function(data) 
		    			{
		    				console.log(data);

		    				data.users.forEach(function(user) {
		    					$('#filter-results').html('<img src="' + user.img + '">');
		    				});
		    			}
		    		});
		    	
    			$('#filter-results').html('<a href="" id="worker-modal">' + worker.name + '</a>');
    			
    				$('#worker-modal').click(function (event) {
    					event.preventDefault();
    					$('#worker-info').html('<p>' + worker.name + '</p>');
    					$('#worker-job').html('- Job: ' + '<p>' + worker.job + '</p>');
    					$('#worker-email').html('- Email: ' + '<p>' + worker.email + '</p>');
    					jQuery.noConflict();
    					$('.js-modal').modal();
    				});
    			});
		    },
	    	error: function()
	    	{
	    		console.log('Ajax Error!!')
	    	}
		});	    	
	});
});
