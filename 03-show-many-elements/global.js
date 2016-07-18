window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){

		var hide_divs = document.getElementsByClassName("hide_me");

		for (var i = 0; i < hide_divs.length; i++){
			hide_divs[i].style.display = "block";
		}

	});

});