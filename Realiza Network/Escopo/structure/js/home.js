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
						like = "<span class='like active' data-post-id='"+ posts[i].post_id + "'></span>";
					} else {
						like = "<span class='like' data-post-id='"+ posts[i].post_id + "'></span>";
					}
					html += "<div class='feed'><div class='feed_inf'><span class='name'>"+posts[i].first_name+" "+posts[i].last_name+"</span></div><p class='feed_text'>"+posts[i].text+"</p><div class='lasticon'><span class='likes'>"+posts[i].likes+"</span>" +like+ "</div></div>";
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

$('body').on("click", ".like", function() {
	var post_id = $(this).data("post-id");
	var element = $(this);
	if (element.hasClass('active')) {
		$.ajax({
			type: 'post',
			url: 'http://realizadigital-api.nodo.cc/unlike/' + post_id,
			data: {
				email: userData.email,
				password: userData.password
			},
			success: function(res) {
				var num = res.likes;
				element.parent().find('.likes').text(num);
				element.removeClass('active');
			}
		});
	} else {
		$.ajax({
			type: 'post',
			url: 'http://realizadigital-api.nodo.cc/like/' + post_id,
			data: {
				email: userData.email,
				password: userData.password
			},
			success: function(res) {
				var num = res.likes;
				element.parent().find('.likes').text(num);
				element.addClass('active');
			}
		});
	}
});

function init() {
	loadUserData();
	loadFeeds();
}

init();