window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){

		var toggle_divs = document.getElementsByClassName("toggle_me");

		for (var i = 0; i < toggle_divs.length; i++){			
			if (toggle_divs[i].style.display === "none"){
				toggle_divs[i].style.display = "block";
			}

			else {
				toggle_divs[i].style.display = "none";
			}
		}
	});

});