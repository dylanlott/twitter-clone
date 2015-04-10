$(document).ready(function(){


	$('#tweet').click(function(e){
		e.preventDefault(); 
		var tweet = $('')
	})

	var insertTweet = function(arr) { //builds out the tweets 
		for (var i=0; i<arr.length; i++){
			$('tweetInfo' + (i + 1)).html('<div>' + 
				'Username:' + 
				'<p>' + arr[i].tweet + 
				'</p>' +
				'<div>'
      		)
		}
	}

	/* add tweet */
	$('#tweet-Submit').click(function(e){
		e.preventDefault(); 
		var username =  $('#username'); 

		return $.ajax({
			method: 'POST', 
			url: 
		})
	})


})