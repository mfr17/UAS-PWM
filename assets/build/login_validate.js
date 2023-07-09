function login_validate() {
	const input_user = document.getElementById("username");
	const input_pass = document.getElementById("password");
	const username = input_user.value;
	const password = input_pass.value;
	const message = document.getElementById("msg");
	const loading = document.getElementById("loading");

	// Validasi user dan redirect ke dashboard dalam 5 detik ketika username dan password sesuai
	if (username == "demo" && password == "demo") {
		input_user.classList.remove("border-danger");
		input_pass.classList.remove("border-danger");
		input_user.classList.add("border-success");
		input_pass.classList.add("border-success");
		message.classList.remove("text-danger");
		message.classList.add("text-success");
		message.textContent = "Login Successfully";
		loading.classList.remove('visually-hidden');
		setTimeout(function () {
			window.location.href = "../../views/index.html";
		}, 5000);
	} else if (username == "") {
		input_user.classList.add("border-danger");
		message.textContent = "Please Input Username";
		message.classList.add("text-danger");
	} else if (username != "demo") {
		input_user.classList.add("border-danger");
		message.textContent = "Username Not Found";
		message.classList.add("text-danger");
	} else if (username == "demo" && password != "demo") {
		input_user.classList.remove("border-danger");
		input_user.classList.add("border-success");
		input_pass.classList.add("border-danger");
		message.textContent = "Wrong Password";
		message.classList.add("text-danger");
	}
}
