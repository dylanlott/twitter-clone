$(document).ready(function(){

	$("#tweet-controls").hide();

	$(".tweet-compose").on('click', function(){
		$(this).css('height', '5em');
		$("#tweet-controls").show(); 
	})

	$('.tweet-compose').keyup(function(){
	  	var max = 140; // set max char count 
	  	var len = $(this).val().length;
	 	if (len >= max) {
	    	$('#char-count').text(' you have reached the limit'); // displays char count
	    	$('#tweet-submit').hide(); //hide tweet button when char limit reached
	  	}
	 	else {
	 		var char = max - len;
	  		$('#char-count').text(char);
	  		$('#tweet-submit').show();
  		}
  		return len; 
	});

	

})