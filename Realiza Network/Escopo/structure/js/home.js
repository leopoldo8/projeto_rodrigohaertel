var userData = localStorage.getItem('userData');
userData = JSON.parse(userData);

function loadUserData() {
	$(".nameperfil").text(userData.first_name+" "+userData.last_name);
	$(".iniciaisperfil").text(userData.first_name.charAt(0)+userData.last_name.charAt(0));
	$(".emailperfil").text(userData.email);
	$(".idadeperfil").text(userData.age);
};

function init() {
	loadUserData();
}

init();