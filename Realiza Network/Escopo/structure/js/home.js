var userData = localStorage.getItem('userData');
userData = JSON.parse(userData);

function loadUserData() {
	$(".nameperfil").text(userData.first_name+" "+userData.last_name);
	$(".iniciaisperfil").text(userData.first_name.charAt(0)+userData.last_name.charAt(0));
	$(".emailperfil").text(userData.email);
	$(".idadeperfil").text(userData.age);
};

$(".exit img").on("click", function sair() {
	localStorage.removeItem('userData');
	window.location = "login.html";	
});

$("#up").on("click", function() {$("html, body").animate({ scrollTop: 0 }, "slow"); return false;});

$("#postar").on("submit", function postar() {
	var userId = userData.id;
	var texto = $("textearea").val();
	$.ajax({

	});
});

function init() {
	loadUserData();
}

init();