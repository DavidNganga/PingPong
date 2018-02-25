//var pingpong = function(number) {
//for (var i = 0; i <= number; i++) {
/////if (number % 15 === 0) {
//	$("div").html("<span class='.result'>pingpong</span>");
//	return "pingpong"
//console.log("pingpong");
//}


//console.log("pingpong");
//	} else if (number % 5 === 0) {
//	$("div").html("<span class='.result'>pong</span>");
//console.log("pong");
//} else if (number % 3 === 0) {
//$("div").html("<span class='.result'>ping</span>");
//console.log("ping");
//} else {
//console.log(number);
//}
//};
//};

//$(document).ready(function() {
//$("form#pingypong").submit(function(event) {
//event.preventDefault();

//var i = parseInt($("input#pingpongy").val());
//var result = pingpong(i);
//$(".result").text(result);

//$(".result").show();
//	});
//});


function pingpong(number) {
	var myArray = [];
	for (var i = 1; i <= number; i++) {
		if (i % 15 === 0) {
			myArray.push("PING PONG");
		} else if (i % 5 === 0) {
			myArray.push("PONG");
		} else if (i % 3 === 0) {
			myArray.push("PING");
		} else {
			myArray.push(i);
		}
	};
	return myArray;
};

$(document).ready(function() {
	$("form#pingypong").submit(function(event) {
		event.preventDefault();
		$("li.res").empty();
		var i = parseInt($("input#pingpongy").val());
		var derivedArray = pingpong(i) + '';
		var splitArray = derivedArray.split(",").join("<br>");
		$("div.result").addClass('result').append("<li class='res'>" + splitArray + "</li>");
	});
});