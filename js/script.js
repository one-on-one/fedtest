var error_count = 0, error_string = '', proceed = 0;


/* ------ created error handeling object 
		for form validation functions ------*/
var EH = function(){
	this.validateEmail = function(email){
		var regexp = /\S+@\S+\.\S+/;
		return regexp.test(email);
	}
	this.validatePhone = function(number){  
		var regexp = /^(\(\d{3}\))|(\d{3}-)\d{3}-\d{4}$/;
		return regexp.test(number); 
	} 
	this.errorHander = function(msg){
		$('.error_header').show().html(msg).animate({
			top: '0px',	
		}, 100);
		setTimeout(function(){
			error_count = 0;
			proceed = 0;
			$('.error_header').animate({
				top: '-102px',
			},{
				complete: function(){
					$(this).hide().html('');	
				}	
			},300);
		},4000);
	}
}

$(document).ready(function(){
	var errObj = new EH();

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

	$('#submit_form').submit(function(){
		if(proceed != 0) return false;
		
		error_string = 'The following errors occured: ';
		if($('input[name="first_name"]').val() == ''){
			$('input[name="first_name"]').css('border','1px solid red');
			error_count++;
			error_string += 'First Name, ';
		} else {
			$('input[name="first_name"]').css('border','1px solid #93a1a1');
		}
		if($('input[name="last_name"]').val() == ''){
			$('input[name="last_name"]').css('border','1px solid red');
			error_count++;
			error_string += 'Last Name, ';	
		} else {
			$('input[name="last_name"]').css('border','1px solid #93a1a1');
		}
		if($('input[name="phone"]').val() == '' || !errObj.validatePhone($('input[name="phone"]').val())){
			$('input[name="phone"]').css('border','1px solid red');
			error_count++;
			error_string += 'Phone Number, ';
		}  else {
			$('input[name="phone"]').css('border','1px solid #93a1a1');
		}
		if($('input[name="email"]').val() == '' || !errObj.validateEmail($('input[name="email"]').val())){
			$('input[name="email"]').css('border','1px solid red');
			error_count++;
			error_string += 'Email is invalid, ';	
		} else {
			$('input[name="email"]').css('border','1px solid #93a1a1');
		}
		if(!$('input[name="education_level"]').is(':checked')){
			$('label strong').css('color','red');
			error_count++;
			error_string += 'Select Education Level, ';
		} else {
			$('label strong').css('color','#222');
		}
		error_string = error_string.slice(0, -2);
		
		if(error_count != 0){
			proceed = 1;
			errObj.errorHander(error_string);
			return false;
		} else {
			return true;
		}
	});
});