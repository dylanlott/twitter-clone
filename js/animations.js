$(document).ready(function(){

	$("#tweet-controls").hide();

	$(".tweet-compose").on('click', function(){
		$(this).css('height', '5em');
		$("#tweet-controls").show(); 
	})

	$('.tweet-compose').keyup(function () {
	  var max = 140;
	  var len = $(this).val().length;
	  if (len >= max) {
	    $('#charNum').text(' you have reached the limit');
	  }
	  else {
	 	 var char = max - len;
	  	 $('#charNum').text(char + ' characters left');
  }
});

})