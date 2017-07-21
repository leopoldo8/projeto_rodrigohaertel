jQuery(function($){
	$("#cpf").mask("999.999.999-99");
	$("#cep").mask("99999-999");
});

var userData = localStorage.getItem('userData');
userData = JSON.parse(userData);

function loadUserData() {
	$("#nome").val(userData.first_name);
	$("#sobrenome").val(userData.last_name);
	$("#idade").val(userData.age);
	$("#cpf").val(userData.cpf);
	$("#cep").val(userData.cep);
	$("#endereco").val(userData.address);
};

$('body').on("click", "#enviar input", function(e) {
	e.preventDefault();
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var idade = $("#idade").val();
	var cpf = $("#cpf").val();
	var cep = $("#cep").val();
	var endereco = $("#endereco").val();


	if (nome == "" || sobrenome == "" || idade == "" || cpf == "" || cep == "" || endereco == "") {
		if (nome == "") {
			$("#nome").addClass("erro");
		} else {
			$("#nome").removeClass("erro");
		}

		if (sobrenome == "") {
			$("#sobrenome").addClass("erro");
		} else {
			$("#sobrenome").removeClass("erro");
		}

		if (idade == "") {
			$("#idade").addClass("erro");
			
		} else {
			$("#idade").removeClass("erro");
		}

		if (cpf == "") {
			$("#cpf").addClass("erro");
			
		} else {
			$("#cpf").removeClass("erro");
		}

		if (cep == "") {
			$("#cep").addClass("erro");
			
		} else {
			$("#cep").removeClass("erro");
		}

		if (endereco == "") {
			$("#endereco").addClass("erro");
			
		} else {
			$("#endereco").removeClass("erro");
		}

		return false;
	}

	var data = {
		first_name: $("#nome").val(),
		last_name: $("#sobrenome").val(),
		email: userData.email,
		age: $("#idade").val(),
		cpf: $("#cpf").val(),
		cep: $("#cep").val(),
		address: $("#endereco").val(),
		password: userData.password
	}

	$.ajax({
		type: 'post',
		url: 'http://realizadigital-api.nodo.cc/alter',
		data: data,
		success: function(res) {
			var userData = res;
			userData.password = data.password;
			localStorage.setItem('userData', JSON.stringify(userData));
			$("form")[0].reset();
			alert("Dados salvos com sucesso.");
			window.location = "home.html"
		} 
	});
});

function init() {
	loadUserData();
}

init();