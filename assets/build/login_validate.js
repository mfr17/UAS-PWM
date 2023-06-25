function validate() {
	var done = 0;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "demo" && password == "demo") {
		window.location.href = "../../views/dashboard.html";
	} else if (done == 0) {
		alert("Wrong Username or Password");
	}
}
