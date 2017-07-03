$("form").on("submit", function () {
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
}
});