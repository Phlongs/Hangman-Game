
var role = [
["T","E","D","D","Y"],
  ["D","O","L","O","R","E","S"],
  ["F","O","R","D"],
  ["M","A","E","V","E"],
  ["B","E","R","N","A","R","D"],
  ["M","A","N","I","N","B","L","A","C","K"],
  ["W","I","L","L","I","A","M"],
  ["M","A","Z","E"],
  ["W","E","S","T","W","O","R","L","D"]
]



var counter = 0;
var win = 0;
var loss = 0;
var attempts = 6;


var random = Math.floor((Math.random()*(role.length-1))); 
var charRole = role[random]; 
var host = new Array(charRole.length);
for (var i = 0; i < host.length; i++){
	host[i] = "_ ";
}

function reset() {
	
	counter = 0;
	attempts = 6;
	console.log("reset");
	console.log(counter);


	var hangman = document.getElementById("hangman");
    	hangman.src = "assets/images/hangman0.png";
 
	document.querySelector("#attempt").innerHTML = "Attempts: " + attempts;
	
}



function printGuess(){
	for (var i = 0; i < host.length; i++){
	var hmGame = document.getElementById("hmGame");
	var gameHang = document.createTextNode(host[i]);
	hmGame.appendChild(gameHang);
	}
}


var letterGuess = function(){
	var a = document.gameForm; 
	var b = a.elements["guessL"]; 
	var userLetter = b.value; 
	userLetter = userLetter.toUpperCase();
	for (var i = 0; i < charRole.length; i++){
		if(charRole[i] === userLetter){
			host[i] = userLetter + " ";
			var trueGuess = true;
		} 
	b.value = "";
	}

var hmGame = document.getElementById("hmGame");
	hmGame.innerHTML="";
	printGuess();
	
	if(!trueGuess){
		var wrongL = document.getElementById("wrongL");
		var gameHang = document.createTextNode(" " + userLetter);
		wrongL.appendChild(gameHang); 
		counter++;
		var hangman = document.getElementById("hangman");
    	hangman.src = "assets/images/hangman" + counter + ".png";
    	attempts--;
    	document.querySelector("#attempt").innerHTML = "Attempts: " + attempts;

	}
	
	var foundLetter = true;
	for (var i = 0; i < host.length; i++){
		if(host[i] === "_ "){
			foundLetter = false;
		}
	}
	if(foundLetter){
		win++;
		document.querySelector("#win").innerHTML = "Wins: " + win;
		reset();
	}
	
	
	if(attempts === 0){
		loss++;
		document.querySelector("#loss").innerHTML = "osses: " + loss;
		reset();
		
	}

	
}
function init(){
	printGuess();
}

window.onload = init;

