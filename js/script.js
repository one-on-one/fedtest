$(document).ready(function(){
	var HTML_EDU = '';
	$.ajax({
		url:'http://fedtest.aws.af.cm',
		dataType:'jsonp',
		success:function(msg){
			var x = 0;
			for(var i in msg){
				HTML_EDU += '<label class="edu_holder" for="' + x + '">' + msg[i] + '</label>' +
							'<input type="radio" name="education_level" value="' + msg[i] + '" class="edu_radio" id="' + x + '" />' +
							'<div class="clear"></div>';
				x++;
			}
			$('div.education_level').html(HTML_EDU);
		}	
	});
});