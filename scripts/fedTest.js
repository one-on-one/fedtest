var edu = document.getElementById('edu'),
	edufields = document.getElementById('edufields');

// Hide the field container so we can toggle it later
edufields.style.display = 'none';

function getEduLevels(data) {

	// Return array of JSONP call
	var arr = [data];

	for(var i=0; i<arr.length; i++) {

		var obj = arr[i];

		for(var key in obj) {

			// Set up the new label and input elements
			var label = document.createElement('label'),
				rad = document.createElement('input');

			// Make the new input type radio, and give it the key value
			rad.setAttribute('value', key);
			rad.setAttribute('name', 'education-level');
			rad.setAttribute('type', 'radio');

			// Now give label the value and put the input inside it
			label.innerHTML = obj[key];
			label.insertBefore(rad, label.firstChild);

			// Finally, put the new label in the form parent
			edufields.appendChild(label);
		}
	}
}

edu.onclick = function() {
	// Toggle the field container
	edufields.style.display = (edufields.style.display != 'none' ? 'none' : '' );
}

// Education levels can change, let's pull them in with the API
var script = document.createElement('script');
script.src = 'http://fedtest.aws.af.cm/?callback=getEduLevels';
document.body.appendChild(script);