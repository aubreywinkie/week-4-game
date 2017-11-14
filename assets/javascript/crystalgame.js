var targetNumber = [Math.floor(Math.random() * 102 + 19 )];
// not sure if this is how to get a random value between 19-120

$("#number-to-guess").text(targetNumber);
var counter = 0;
var options1 = [Math.floor((Math.random() * 12 ) + 1)];
var options2 = [Math.floor((Math.random() * 12 ) + 1)];
var options3 = [Math.floor((Math.random() * 12 ) + 1)];
var options4 = [Math.floor((Math.random() * 12 ) + 1)];

var numberOptions = [options1, options2, options3, options4];
// is this how you get 4 separate random numbers between 1- 12?

for (var i = 0; i < numberOptions.length; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
	// image wont show up
	// need to figure out how to have 4 different crystal images
	imageCrystal.atrr("data-crystalvalue", numberOptions[i]);
	$("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

});

