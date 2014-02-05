function calcFields() {
	/* Criteria for names, phone number, and email */
	var name_cr  = /^[A-Za-z]{1,}$/;
	var phone_cr = /^\([0-9]{3}\)\ [0-9]{3}\-[0-9]{4}$/;
	var email_cr = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

	/* Elements by ID */
	var first_name = document.getElementById("first_name");
	var last_name  = document.getElementById("last_name");
	var phone      = document.getElementById("phone");
	var email      = document.getElementById("email");

	var high_school = document.getElementById("high_school");
	var associate   = document.getElementById("associate");
	var bachelor    = document.getElementById("bachelor");
	var master      = document.getElementById("master");
	var doctoral    = document.getElementById("doctoral");
}