window.addEventListener("load", function(){

	var input_name = document.getElementById("full_name");

	input_name.addEventListener("keyup", function(){

		var greeting = document.getElementById("greeting");

		greeting.innerHTML = ("Hello there, " + input_name.value + "!");

	});

});