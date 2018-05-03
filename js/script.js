//Jarno Sukunimi
//NTK17SP

$("button").click(function() {
	var pressed = $(this).text();
	var calculation = $(".calculations p").text();
	var LC = calculation.slice(-1);
	var calcLength = calculation.length;
	var zeroCheck = new RegExp("^[0\0]+$").test(calculation);
	if (!(pressed == "CE" || pressed == "+" || pressed == "-" || pressed == "C" || pressed == "←" || pressed == "=" || pressed == "×" || pressed == "÷" || pressed == "," || pressed == "0")) {
		$(".calculations p").append(pressed);
		var calculationMath = eval(calculation);
	} else if (pressed == "CE") {
		var calculation = $(".calculations p").text();
		var stringLength = calculation.length;
		if (stringLength == 1) {
			$(".calculations p").empty();
			$(".result p").empty();
		} else {
			calculation = calculation.slice(0, -1)
			$(".calculations p").text(calculation);
		}
	} else if (pressed == "C") {
		$(".calculations p").empty();
		$(".result p").empty();
	} else if (pressed == "÷") {
		if (LC != "*" && LC != "/" && LC != "-" && LC != "+" && LC != "." && calcLength != 0) {
			$(".calculations p").append("/");
		}
	} else if (pressed == "×") {
		if (LC != "*" && LC != "/" && LC != "-" && LC != "+" && LC != "." && calcLength != 0) {
			$(".calculations p").append("*");
		}
	} else if (pressed == "0") {
		if (calcLength == 0) {
			$(".calculations p").append("0.");
		} else if (zeroCheck == false) {
			$(".calculations p").append("0");
		}
	} else if (pressed == ",") {
		if (calcLength == 0) {
			$(".calculations p").append("0.");
		} else if (LC == "*" || LC == "/" || LC == "-" || LC == "+") {
			$(".calculations p").append("0.");
		} else if (LC == ".") {} else {
			$(".calculations p").append(".");
		}
	} else if (pressed == "-") {
		if (LC != "*" && LC != "/" && LC != "-" && LC != "+" && LC != "." && calcLength != 0) {
			$(".calculations p").append("-");
		}
	} else if (pressed == "+") {
		if (LC != "*" && LC != "/" && LC != "-" && LC != "+" && LC != "." && calcLength != 0) {;
			$(".calculations p").append("+");
		}
	} else if (pressed == "=") {
		var calculationMath = eval(calculation);
		$(".result p").empty().text(calculationMath);
	}
});