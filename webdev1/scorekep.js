var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1dDisplay = document.querySelector("#p1Display");
var p1score = 0;
var p2Display = document.querySelector("#p2Display");
var p2score =0;
var gameOver =false;
var winningscore =5;


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningscore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
	p1Display.textContent =p1score;
})
p2Button.addEventListener("click", function(){
	p2score++;
	p2Display.text.textContent =p2score;
})
