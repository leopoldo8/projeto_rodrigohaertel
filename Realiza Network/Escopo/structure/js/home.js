<<<<<<< HEAD
var userData = localStorage.getItem('userData');
userData = JSON.parse(userData);

function loadUserData() {
	$(".nameperfil").text(userData.first_name+" "+userData.last_name);
	$(".iniciaisperfil").text(userData.first_name.charAt(0)+userData.last_name.charAt(0));
	$(".emailperfil").text(userData.email);
	$(".idadeperfil").text(userData.age);
};

function loadFeeds() {
	var wrapper = $("#feeds");
	user_id = userData.id;
	$.ajax({
		url: "http://realizadigital-api.nodo.cc/feeds/"+user_id,
		type: 'get',
		success: function(res) {
			var posts = res.posts;
			var html = "";
			if (posts.length == 0) {
				html = "<div class='feed'><p>Não há novos posts no momento.</p></div>";
			} else {
				posts.reverse();
				for (i=0; i<posts.length; i++) {
					if (posts[i].liked) {
						src = "img/icon-like-active.png";
					} else {
						src = "img/icon-like.png";
					}
					html += "<div class='feed'><div class='feed_inf'><span class='name'>"+posts[i].first_name+" "+posts[i].last_name+"</span></div><p class='feed_text'>"+posts[i].text+"</p><div class='lasticon'><span class='likes'>"+posts[i].likes+"</span><img src='"+src+"'></div></div>";
				}
			}
			wrapper.html(html);
		}
	});
}

$(".exit img").on("click", function sair() {
	localStorage.removeItem('userData');
	window.location = "login.html";	
});

$("#up").on("click", function() {$("html, body").animate({ scrollTop: 0 }, "slow"); return false;});

$("#postar").on("submit", function postar() {
	var texto = $("textarea").val();
	var email = userData.email;
	var password = userData.password;
	if (texto == "") {
		$("textarea").addClass("texterro");
		return false;
	} else if (texto.length > 200) {
		alert("Sua publicação excede o limite de 200 caracteres.");
		return false;
	} else {
		$("textarea").removeClass("texterro");
	}
	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/feed",
		data: {
			text: texto,
			email: email,
			password: password
		},
		success: function (res) {
			loadFeeds();
			$("textarea").val("");
		}
	});
	return false;
});

function init() {
	loadUserData();
	loadFeeds();
}

=======
<<<<<<< HEAD
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

=======
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

>>>>>>> 958873c0b1e0c0e9a54124ff781b991ecf76f009
>>>>>>> ec533984b352c25f488e2b203252830774bfdde4
init();