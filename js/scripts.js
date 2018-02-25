var pingpong = function(number) {
	for (var i = 0; i <= number; i++) {
		if (number % 15 === 0) {
			$("div").html("<span class='.result'>pingpong</span>");
			return "pingpong"
			//console.log("pingpong");
		}


		//console.log("pingpong");
	} else if (number % 5 === 0) {
		$("div").html("<span class='.result'>pong</span>");
		console.log("pong");
	} else if (number % 3 === 0) {
		$("div").html("<span class='.result'>ping</span>");
		console.log("ping");
	} else {
		console.log(number);
	}
};
};

$(document).ready(function() {
	$("form#pingypong").submit(function(event) {
		event.preventDefault();

		var i = parseInt($("input#pingpongy").val());
		var result = pingpong(i);
		$(".result").text(result);

		$(".result").show();
	});
});