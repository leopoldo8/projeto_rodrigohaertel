$("form").on("submit", function (e) {
	e.preventDefault();

	var email = $("#email").val();
	var senha = $("#senha").val();

	if (email == "" || senha == "") {

		if (email == "") {
			$("#email").addClass("erro");
			
		} else {
			$("#email").removeClass("erro");
		}

		if (senha == "") {
			$("#senha").addClass("erro");
			
		} else {
			$("#senha").removeClass("erro");

		}
		return false;
	};

	var data = {
		email: email,
		password: senha
	};

	$.ajax({
		type: 'post',
		url:"http://realizadigital-api.nodo.cc/login",
		data: data,
		success: function(res){
			alert("Logado com sucesso!");
			var userData = res;
			userData.password = data.password;
			localStorage.setItem('userData', JSON.stringify(userData));
			window.location = "home.html";
		},
		error: function(xhr){
			alert(xhr.responseJSON.error.message);
		}
	});
	return false
});