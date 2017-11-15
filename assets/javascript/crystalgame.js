var targetNumber = [Math.floor(Math.random() * 102 + 19 )];
// not sure if this is how to get a random value between 19-120

$("#number-to-guess").text(targetNumber);
var counter = 0;
var numberGen = [Math.floor((Math.random() * 12 ) + 1)];
// var options2 = [Math.floor((Math.random() * 12 ) + 1)];
// var options3 = [Math.floor((Math.random() * 12 ) + 1)];
// var options4 = [Math.floor((Math.random() * 12 ) + 1)];


var numberOptions = [
{
	option: numberGen,
	img: src="https://vignette.wikia.nocookie.net/fantendo/images/3/31/Crystal.png/revision/latest?cb=20150419210156" }, 
{
	option: numberGen,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324"}, 
{
	option: numberGen,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045"}, 
{
	option: numberGen,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045"}
];
// is this how you get 4 separate random numbers between 1- 12?

for (var i = 0; i < numberOptions.length; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr('src', numberOptions[i].img);
	// need to figure out how to have 4 different crystal images
	imageCrystal.attr("data-crystalvalue", numberOptions[i].option);
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

// function checkWin() {
// 	if counter === numberGen {
// 		alert('YOU WIN!!!');
// 		reset();
// 	}
// }

// function checkLoss {

// }

