$(document).ready(function() {


    var url =  "http://fedtest.aws.af.cm/";
    $.getJSON(url + "?callback=?", null, function(edLvls) {
        var eachEdLevel = "";
        for(i in edLvls) {
            level = edLvls[i];
            eachEdLevel+="<input type='radio' required='' class='btn-radio' required='' name='edlevel' value='"+i+"'/>"+level+"<br>";
        }
        
    $("#edu-list").append(eachEdLevel);
    });

//alt method for email validation:
	// function validateForm()
	// {
	// var x=document.forms["signUp"]["email"].value;
	// var atpos=x.indexOf("@");
	// var dotpos=x.lastIndexOf(".");
	// if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	//   {
	//   alert("Not a valid e-mail address");
	//   return false;
	//   }
	// }

    $('#signUp').submit(function(){
                var regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!regPhone.test($('.phone').val())){
                        alert("Please enter a valid phone number (ie. (xxx)xxx-xxxx )");
                        return false;
                }
                if(!regEmail.test($('.email').val())){
                        alert("Please enter a valid email (ie. someone@email.com)");
                        return false;
                }
    });


//basic form validation completed via html - below is what I was working on as a js solution - incomplete	
	// function validateForm()
	// {
	// var first_name = document.forms["signUp"]["first_name"].value;
	// if (first_name==null || first_name=="")
	//   {
	//   alert("First name must be filled out");
	//   return false;
	//   }
	
	// var last_name = document.forms["signUp"]["last_name"].value;
	// if (last_name==null || last_name=="")
	//   {
	//   alert("Last name must be filled out");
	//   return false;
	//   }  
	// }

	// var inputtxt = $('.phone').val();

	// function validatePhone(inputtxt){
	// 	var regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	// 	if((inputtxt.value.match(regPhone)){
	// 		return true;
	// 	}
	// 	else{
	// 		alert("Please enter a valid phone number");
	// 		return false;
	// 		}
	// }




});