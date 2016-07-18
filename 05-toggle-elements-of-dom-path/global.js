window.addEventListener("load", function(){

	var button = document.getElementById("toggle_button");

	button.addEventListener("click", function() {

		var movie_list = document.querySelectorAll("ul.second_five li");

		for (var i = 0; i < movie_list.length; i++) {			
			if (movie_list[i].style.display === "list-item"){
				movie_list[i].style.display = "none";
			}

			else {
				movie_list[i].style.display = "list-item";
			}
		}

	});

});