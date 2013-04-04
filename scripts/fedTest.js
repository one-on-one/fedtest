function educationFields() {

	var edu = document.getElementById('edu'),
	edufields = document.getElementById('edufields');

	// Hide the field container so we can toggle it later
	edufields.style.display = 'none';

	edu.onclick = function() {
		// Toggle the field container
		edufields.style.display = (edufields.style.display != 'none' ? 'none' : '' );
	}

	// Education levels can change, let's pull them in with the API
	var script = document.createElement('script');
	script.src = 'http://fedtest.aws.af.cm/?callback=getEduJSON';
	document.body.appendChild(script);
}

function getEduJSON(data) {

	// Return array of JSONP call
	var arr = [data];

	for(var i=0; i<arr.length; i++) {

		var obj = arr[i];

		for(var key in obj) {

			// Set up the new label and input elements
			var label = document.createElement('label'),
				rad = document.createElement('input');

			// Make the new input type radio, make it required, and give it the key value
			rad.setAttribute('value', key);
			rad.setAttribute('name', 'education-level');
			rad.setAttribute('type', 'radio');
			rad.setAttribute('required', 'required');

			// Now give label the value and put the input inside it
			label.innerHTML = obj[key];
			label.insertBefore(rad, label.firstChild);

			// Finally, put the new label in the form parent
			edufields.appendChild(label);
		}
	}
}

// Call educationFields when loaded
educationFields();

// Form validation
function validate(frm){
	var validForm = true,
		errMsg = '';
	
	// For all fields with required attribute
	for(i=0; i<frm.elements.length; i++){
		var elem = frm.elements[i];
		if(elem.getAttribute('required') && elem.value == '') {
			errMsg += '<li>' + elem.getAttribute('data-required-message') + '</li>';
			validForm = false;
		}
	}

	// 1. Get phone value and strip it so there's just numbers
	// 2. Get email value and set regex filter to test against
	// 3. Get the value of education level fields
	var phone = frm.elements['phone'].value.replace(/[^\d]/g,''),
		email = frm.elements['email'].value,
		filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		education = frm.elements['education-level'].value;

	// Throw error if phone strips to anything other than 10 chars
	if(phone.length != 10) {
		errMsg += '<li>Please enter a valid phone number, eg: (555) 555-5555</li>';
		validForm = false;
	} else {
		// Otherwise we're good, now format the field the way we need it
		frm.elements['phone'].value = '(' + phone.substring(0,3) + ") " + phone.substring(3, 6) + "-" + phone.substring(6);
	}
	
	// Test the email against the regex
	if(!filter.test(email)) {
		errMsg += '<li>Please enter a valid email address, eg: yourname@domain.com</li>';
		validForm = false;
	}

	// Not sure why these weren't included with the global check
	if(education == '') {
		errMsg += '<li>Please select your current education level.</li>';
		validForm = false;
	}

	// If there's an error of any kind, let the user know
	if(!validForm){
		//alert(errMsg);
		var messages = document.getElementById('messages'),
			errElem = document.createElement('ol');

		errElem.innerHTML = errMsg;
		messages.appendChild(errElem);
		//document.getElementById('messages').appendChild('<p>'+errMsg+'</p>');
		return false;
	}
	
	return true;
}