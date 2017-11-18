var targetNumber = [Math.floor(Math.random() * 102 + 19 )];


$("#number-to-guess").text(targetNumber);
var counter = 0;
var numGen1 = Math.floor((Math.random() * 12 ) + 1);
var numGen2 = Math.floor((Math.random() * 12 ) + 1);
var numGen3 = Math.floor((Math.random() * 12 ) + 1);
var numGen4 = Math.floor((Math.random() * 12 ) + 1);
var win = 0
var loss = 0


var numberOptions = [
{
	option: numGen1,
	img: src="https://vignette.wikia.nocookie.net/fantendo/images/3/31/Crystal.png/revision/latest?cb=20150419210156" }, 
{
	option: numGen2,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324"}, 
{
	option: numGen3,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045"}, 
{
	option: numGen4,
	img: src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045"}
];

$(document).ready(function(){
for (var i = 0; i < numberOptions.length; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image crystal" + i);
	imageCrystal.attr('src', numberOptions[i].img);
	imageCrystal.attr("data-crystalvalue", numberOptions[i].option);
	$("#crystals").append(imageCrystal);
	$("#instructions").toUpperCase;
	// can you do this?
}

$(".crystal-image").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	$("#your-score").text(counter);
	checkWin();
	checkLoss();
	
});

function checkWin() {
	if(counter == targetNumber) {
		alert('YOU WIN!!!');
		reset();
		win += 1;
		$("#win").text(win);
	} 
	
}
function checkLoss() {
	if(counter > targetNumber){
		alert("YOU LOSE");
		reset();
		loss +=1;
		$("#loss").text(loss);
	} 
	
}
    
function reset() {
	counter = 0;
	$("#your-score").text(counter);
	targetNumber = [Math.floor(Math.random() * 102 + 19 )];
	$("#number-to-guess").text(targetNumber);
	for (var i = 0; i < numberOptions.length; i++) {
	console.log(imageCrystal);
	numberOptions[i].option = Math.floor((Math.random() * 12 ) + 1);
	$('.crystal' + i).attr("data-crystalvalue", numberOptions[i].option);	
}

	
}
});

