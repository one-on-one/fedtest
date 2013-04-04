function getEduLevels(data) {

	// Return array of JSONP call
	var arr = [data];

	for(var i=0;i<arr.length;i++) {

		var obj = arr[i],
			parent = document.getElementById('edu');

		for(var key in obj) {

			// Set up the new label and input elements
			var label = document.createElement('label'),
				rad = document.createElement('input');

			// Make the new input type radio, and give it the key value
			rad.setAttribute('value', key);
			rad.setAttribute('name', 'education-level');
			rad.setAttribute('type', 'radio');

			// Now give label the value and put the input inside it
			label.setAttribute('class', 'inline');
			label.innerHTML = obj[key];
			label.appendChild(rad);

			// Finally, put the new label in the form parent
			parent.appendChild(label);
		}
	}
}

// Education levels can change, let's pull them in with the API
var script = document.createElement('script');
script.src = 'http://fedtest.aws.af.cm/?callback=getEduLevels';
document.body.appendChild(script);