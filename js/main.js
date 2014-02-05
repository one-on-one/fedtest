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

	/* Elemet's values */
	var first_name_value = first_name.value;
	var last_name_value  = last_name.value;
	var phone_value      = phone.value;
	var email_value      = email.value;

	var high_school_value = high_school.value;
	var associate_value   = associate.value;
	var bachelor_value    = bachelor.value;
	var master_value      = master.value;
	var doctoral_value    = doctoral.value;

	/* Validation statements for names, phone numbers and email */
	if ( first_name_value == null || first_name_value == "" || !(name_cr.test(first_name_value)) ) {
		alert("Please enter a valid first name.");
		return false;
	}

	if ( last_name_value == null || last_name_value == "" || !(name_cr.test(last_name_value)) ) {
		alert("Please enter a valid last name.");
		return false;
	}

	if ( phone == null || phone == "" || !(phone_cr.test(phone_value)) ) {
		alert("Phone format: (###) ###-####");
		return false;
	}

	if ( email == null || email == "" || !(email_cr.test(email_value)) ) {
		alert("Please enter a valid email address");
		return false;
	}

	/* Validation Statement for Current Education */
	if (!(high_school.checked || associate.checked || bachelor.checked || master.checked || doctoral.checked)) {
		alert("Plese select you current education.");
		return false
	}
}