// jsonp call 
function update_form (data) {
var edu = document.getElementById("education");
  for(var key in data){
  	 if (key !== 'some') {
  	 	  var attrName = key;
	      var attrValue = data[key];
	      var label = document.createElement("label");
	         radioInput = document.createElement('input');
	         radioInput.setAttribute('type', 'radio');
	         radioInput.setAttribute('name', 'edu');
	         radioInput.setAttribute('value', attrName);
	         label.insertAdjacentHTML('afterBegin', attrValue);
	         label.appendChild(radioInput);         
	         edu.appendChild(label);
  		}
	}
};

window.onload=function(){
	var script_element = document.createElement('script');
	script_element.src = 'http://fedtest.aws.af.cm/?callback=update_form';
	document.getElementsByTagName('head')[0].appendChild(script_element);
};

// End jsonp call 


// form validation
var err = 0;
function validate(e){
	var val = document.getElementById(e).value;
	switch (e)
	{
	case "fname":
	  if(!val){err = 0; }else{ err = 1; }
	  checkError(e);
	  break;
	case "lname":
	  if(!val){err = 0; }else{ err = 1; }
	  checkError(e);
	  break;
	case "phone":
	  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	  if(!val.match(phoneno)){err = 0; }else{ err = 1; }
	  checkError(e);
	  break;
	case "email":
	  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	  if(!val.match(email)){err = 0; }else{ err = 1; }
	  checkError(e);
	  break;
	}		
};

function checkError(e){
	  var error = document.getElementById(e+'Error');
  	  var errorClass = error.className;
	 if(errorClass == "validate" && err == 0){
	    	error.className = errorClass + " error";
	    }
	else if(errorClass == "validate error" && err >= 1){
	    	error.className = errorClass = "";
	    	error.className = errorClass + "validate";
	    }
}

function lastCheck(){   
   var radio = document.getElementsByName('edu');
   var isradio;
   for (var i=0; i<radio.length; i++) {
		if (radio[i].checked) {
			isradio = "checked";
	    }
	}
	
	if(isradio !== "checked"){err = 0; }else{ err = 1; }
	  checkError('radio');
		
	var valarr = new Array("fname","lname","phone", "email");
	for (i=0; i < valarr.length; i++) {
		validate(valarr[i]);
  	}  	  	
}

function beforeSubmit(){
	lastCheck();
	err = document.querySelectorAll('.error').length;
	if(err == 0 ){ return true; }else{ return false; }
}
// end form validation
