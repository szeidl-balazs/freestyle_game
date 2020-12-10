/*window.addEventListener("load", function() */
function pageLoaded() {
	console.log("Betöltődik az oldal");

	let rootDiv = document.getElementById("root");

	

	/*a formot és a dice-ot befoglaló konténer*/

	rootDiv.insertAdjacentHTML('afterbegin', '<div class="formAndDiceContainer"></div>');
	let formAndDiceContainer = document.querySelector(".formAndDiceContainer");
	formAndDiceContainer.insertAdjacentHTML('beforebegin', '<h1>Roll the dice!</h1>');


	/*A formot befoglaló container létrehozása */	
	formAndDiceContainer.insertAdjacentHTML('afterbegin', '<div class="formContainer"></div');
		let formContainer = document.querySelector(".formContainer");
	

	/*A form létrehozása */
		formContainer.insertAdjacentHTML('afterbegin', '<form class="form"></form>');
		let form = document.querySelector(".form");

	/*Player1 input létrehozása attribútumokkal */
		form.insertAdjacentHTML('beforebegin', '<h3 id="playerInput">Select player!</h3>');
		form.insertAdjacentHTML('afterbegin', '<div class="formName1Container"></div>');	
		let formName1Container = document.querySelector(".formName1Container");

		formName1Container.insertAdjacentHTML('afterbegin', '<input id="nameInputPlayer1" autofocus></name>');
		let nameInputPlayer1 = document.querySelector("#nameInputPlayer1");
		nameInputPlayer1.setAttribute("id", "nameInputPlayer1");
		nameInputPlayer1.setAttribute("type", "text");
		nameInputPlayer1.setAttribute("placeholder", "Player1");
		
		/*player1 gomb létrehozása*/
			form.insertAdjacentHTML('beforeend', '<div class="buttonPlayer1Container"></div>');
			let buttonPlayer1Container = document.querySelector(".buttonPlayer1Container");
			buttonPlayer1Container.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer1">Roll the dice 1</>');
			let buttonPlayer1 = document.querySelector("#buttonPlayer1");
			
	
	/*Player2 input létrehozása attribútumokkal */
		form.insertAdjacentHTML('beforeend', '<div class="formName2Container"></div>');
		let formName2Container = document.querySelector(".formName2Container");
	
		formName2Container.insertAdjacentHTML('beforeend', '<input id="nameInputPlayer2" autofocus></name>');
		let nameInputPlayer2 = document.querySelector("#nameInputPlayer2");
		nameInputPlayer2.setAttribute("id", "nameInputPlayer2");
		nameInputPlayer2.setAttribute("type", "text");
		nameInputPlayer2.setAttribute("placeholder", "Player2");


	/*player2 gomb létrehozása*/
		form.insertAdjacentHTML('beforeend', '<div class="buttonPlayer2Container"></div>');
		let buttonPlayer2Container = document.querySelector(".buttonPlayer2Container");
		buttonPlayer2Container.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer2">Roll the dice 2</>');
		let buttonPlayer2 = document.querySelector("#buttonPlayer2");

	/*A character sheet-et befoglaló container létrehozása */	
		formContainer.insertAdjacentHTML('afterend', '<div class="diceContainer"></div');
		let diceContainer = document.querySelector(".diceContainer");
		diceContainer.insertAdjacentHTML('afterbegin', '<img src="img/player2_dot3.png" class="dicePlayer13">');
		let dicePlayer13 = document.querySelector(".dicePlayer13");
	
	/* dice mozgatás balról jobbra */
		buttonPlayer1.addEventListener('click', function() {
			dicePlayer13.classList.add("dicePlayer13");
		});

		buttonPlayer2.addEventListener('click', function() {
			dicePlayer13.classList.add("dicePlayer13");
		});

		/*eredmény generátor létrehozása*/

		diceContainer.insertAdjacentHTML('beforeend', '<p id="scorePlayer1"></p>');
		let scorePlayer1 = document.querySelector("#scorePlayer1");
		document.getElementById("scorePlayer1").innerHTML = Math.floor(Math.random() * 6) +1;

		diceContainer.insertAdjacentHTML('beforeend', '<p id="scorePlayer2"></p>');
		let scorePlayer2 = document.querySelector("#scorePlayer2");
		document.getElementById("scorePlayer2").innerHTML = Math.floor(Math.random() * 6) +1;


	/*buttonPlayer1.addEventListener('click', function() {
		let dice = document.querySelector("#dicePlayer13");
			let position = 180;
			let timing = setInterval(frame, 2);
			function frame() {
				if (position == 160) {
						clearInterval(timing);
				}

				else {
					position++;
					dice.style.bottom = position + 'px';
					dice.style.right = position + 'px';
				}
			}
	});*/
	
		

	 
			/* player1 gomb és a dice link */	

		/*elindítani és megállítani a szám generálót */

/*<button onclick="myStartFunction()">Start</button> <button onclick="myStopFunction()">Stop</button>

<p id="demo"></p>

<p id="demo2" style="color:red;"></p>

<script>
var myVar;

function myStartFunction() {
  myVar = setInterval(alertFunc, 2000, "First parameter", "Second parameter");
}

function alertFunc(param1, param2) {
  document.getElementById("demo").innerHTML += "Hello ";

  document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>" 
  + param1 + "<br>" + param2 + "<br>";
}

function myStopFunction() {
  clearInterval(myVar);
}*/
		
	
};

window.addEventListener("load", pageLoaded);
