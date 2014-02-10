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
