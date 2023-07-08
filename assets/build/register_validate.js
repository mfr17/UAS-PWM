// Melihat password
function show_password() {
	let pass = document.getElementById("password");
	let pass2 = document.getElementById("confirm_password");

	if (pass.type === "password") {
		pass.type = "text";
		pass2.type = "text";
	} else {
		pass.type = "password";
		pass2.type = "password";
	}
}

// Validasi Registrasi
function register_validate() {
	let email_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

	// Get element by ID
	const done = 0;
	const input_user = document.getElementById("username");
	const input_name = document.getElementById("name");
	const input_email = document.getElementById("email");
	const input_password = document.getElementById("password");
	const input_cnfm_password = document.getElementById("confirm_password");
	const msg_user = document.getElementById("msg_user");
	const msg_name = document.getElementById("msg_name");
	const msg_email = document.getElementById("msg_email");
	const msg_pass = document.getElementById("msg_pass");
	const msg_pass2 = document.getElementById("msg_pass2");
	const msg = document.getElementById("msg");
	const loading = document.getElementById("loading");

	// Get element value
	const user = input_user.value;
	const name = input_name.value;
	const email = input_email.value;
	const pass = input_password.value;
	const pass2 = input_cnfm_password.value;


	// Validasi user
	if (user.length >= 6) {
		input_user.classList.remove("border-danger");
		input_user.classList.add("border-success");
		msg_user.classList.remove("text-danger");
		msg_user.classList.add("text-success");
		msg_user.textContent = "Username valid";
	}
	else {
		input_user.classList.remove("border-success");
		input_user.classList.add("border-danger");
		msg_user.classList.remove("text-success");
		msg_user.classList.add("text-danger");
		msg_user.textContent = "Username minimal 6 karakter";
	}

	// Validasi nama
	if (name != "") {
		input_name.classList.remove("border-danger");
		input_name.classList.add("border-success");
		msg_name.classList.remove("text-danger");
		msg_name.classList.add("text-success");
		msg_name.textContent = "Nama valid";
	}
	else {
		input_name.classList.remove("border-success");
		input_name.classList.add("border-danger");
		msg_name.classList.remove("text-success");
		msg_name.classList.add("text-danger");
		msg_name.textContent = "Nama tidak boleh kosong";
	}

	// Validasi email
	if (email.match(email_regex)) {
		input_email.classList.remove("border-danger");
		input_email.classList.add("border-success");
		msg_email.classList.remove("text-danger");
		msg_email.classList.add("text-success");
		msg_email.textContent = "Email valid";
		// console.log("Email Valid");
	}
	else {
		input_email.classList.remove("border-success");
		input_email.classList.add("border-danger");
		msg_email.classList.remove("text-success");
		msg_email.classList.add("text-danger");
		msg_email.textContent = "Email tidak valid";
		// console.log("Email Tidak Valid");
	}

	// Validasi password
	if (pass.length < 8 || pass == "") {
		input_password.classList.remove("border-success");
		input_password.classList.add("border-danger");
		msg_pass.classList.remove("text-success");
		msg_pass.classList.add("text-danger");
		msg_pass.textContent = "Password minimal 8 karakter";
	}
	else {
		input_password.classList.remove("border-danger");
		input_password.classList.add("border-success");
		msg_pass.classList.remove("text-danger");
		msg_pass.classList.add("text-success");
		msg_pass.textContent = "Password valid";
	}

	// Validasi konfirmasi password
	if (pass2 != pass || pass2.length != pass.length || pass2 == "") {
		input_cnfm_password.classList.remove("border-success");
		input_cnfm_password.classList.add("border-danger");
		msg_pass2.classList.remove("text-success");
		msg_pass2.classList.add("text-danger");
		msg_pass2.textContent = "Password tidak sama";
	}
	else {
		input_cnfm_password.classList.remove("border-danger");
		input_cnfm_password.classList.add("border-success");
		msg_pass2.classList.remove("text-danger");
		msg_pass2.classList.add("text-success");
		msg_pass2.textContent = "Password valid";
	}
	if (input_user.classList.contains("border-success") && input_name.classList.contains("border-success") && input_email.classList.contains("border-success") && input_password.classList.contains("border-success") && input_cnfm_password.classList.contains("border-success")) {
		msg.textContent = "Register Successfully";
		loading.classList.remove('visually-hidden');
		setTimeout(function () {
			window.location.href = "index.html";
		}, 5000);

	}
}