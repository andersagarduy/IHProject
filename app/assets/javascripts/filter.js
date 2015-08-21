$(document).ready(function() {	
	$('#filter-form-tag').submit(function (event) {
		event.preventDefault();
		var formObj = $(this);
		var formURL = formObj.attr("action");
		var formData = formObj.serializeArray();

		$.ajax({
			url: formURL,
			type: 'POST',
			data: formData,
			success: function(data)
		    {
		    	console.log(data);

		    	data.forEach(function(worker){
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
