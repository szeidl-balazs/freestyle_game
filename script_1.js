/*window.addEventListener("load", function() */
function pageLoaded() {
	console.log("Betöltődik az oldal");

	let rootDiv = document.getElementById("root");

	

	/*a formot és a dice-ot befoglaló konténer*/

	rootDiv.insertAdjacentHTML('afterbegin', '<div class="formAndDiceContainer"></div>');
	let formAndDice = document.querySelector(".formAndDiceContainer");
	formAndDice.insertAdjacentHTML('beforebegin', '<h1>Roll the dice!</h1>');


	/*A formot befoglaló container létrehozása */	
	formAndDice.insertAdjacentHTML('afterbegin', '<div class="formContainer"></div');
		let formCont = document.querySelector(".formContainer");
	

	/*A form létrehozása */
		formCont.insertAdjacentHTML('afterbegin', '<form class="form"></form>');
		let formItem = document.querySelector(".form");

	/*Player1 input létrehozása attribútumokkal */
		formItem.insertAdjacentHTML('beforebegin', '<h3 id="playerInput">Select player!</h3>');
		formItem.insertAdjacentHTML('afterbegin', '<div class="formName1Container"></div>');	
		let formName1Cont = document.querySelector(".formName1Container");

		formName1Cont.insertAdjacentHTML('afterbegin', '<input id="nameInputPlayer1" autofocus></name>');
		let nameInput1 = document.querySelector("#nameInputPlayer1");
		nameInput1.setAttribute("id", "nameInputPlayer1");
		nameInput1.setAttribute("type", "text");
		nameInput1.setAttribute("placeholder", "Player1");
		
		/*player1 gomb létrehozása*/
			formItem.insertAdjacentHTML('beforeend', '<div class="buttonPlayer1Container"></div>');
			let buttonPlayer1Cont = document.querySelector(".buttonPlayer1Container");
			buttonPlayer1Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer1" type="button">Roll the dice1!</button>');
			let buttonPlayer01 = document.querySelector("#buttonPlayer1");
			
	
	/*Player2 input létrehozása attribútumokkal */
		formItem.insertAdjacentHTML('beforeend', '<div class="formName2Container"></div>');
		let formName2Cont = document.querySelector(".formName2Container");
	
		formName2Cont.insertAdjacentHTML('beforeend', '<input id="nameInputPlayer2" autofocus></name>');
		let nameInput2 = document.querySelector("#nameInputPlayer2");
		nameInput2.setAttribute("id", "nameInputPlayer2");
		nameInput2.setAttribute("type", "text");
		nameInput2.setAttribute("placeholder", "Player2");


	/*player2 gomb létrehozása*/
		formItem.insertAdjacentHTML('beforeend', '<div class="buttonPlayer2Container"></div>');
		let buttonPlayer2Cont = document.querySelector(".buttonPlayer2Container");
		buttonPlayer2Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer2" type="button">Roll the dice2!</button>');
		let buttonPlayer02 = document.querySelector("#buttonPlayer2");

	/*A character sheet-et befoglaló container létrehozása */	
		formCont.insertAdjacentHTML('afterend', '<div class="diceContainer"></div');
		let diceCont = document.querySelector(".diceContainer");
		diceCont.insertAdjacentHTML('afterbegin', '<img src="img/player2_dot3.png" class="dicePlayer13">');
		let dicePlayer013 = document.querySelector(".dicePlayer13");
	
		/*dice mozgatás balról jobbra*/
		buttonPlayer01.addEventListener('click', function() {
			dicePlayer013.classList.add("dicePlayer13");
		});

		buttonPlayer02.addEventListener('click', function() {
			dicePlayer013.classList.add("dicePlayer13");
		});

		/*eredmény generátor létrehozása*/	
		

		 
		function scoreDisplay01() {
			let score1 = Math.floor(Math.random() * 6) +1;
			diceCont.insertAdjacentHTML('beforeend', '<p id="scorePlayer1"></p>');
			let scorePlayer01 = document.querySelector("#scorePlayer1");
			scorePlayer01.innerHTML = score1;
			return false;		

		}

		buttonPlayer01.addEventListener('click', scoreDisplay01);

		function scoreDisplay02() {
			let score2 = Math.floor(Math.random() * 6) +1;
			diceCont.insertAdjacentHTML('beforeend', '<p id="scorePlayer2"></p>');
			let scorePlayer02 = document.querySelector("#scorePlayer2");
			scorePlayer02.innerHTML = score2;
			return false;
		}

			buttonPlayer02.addEventListener('click', scoreDisplay02);


			/* A scorePlayer1 és a scorePlayer2 id-jű p tagek értékét be kell menteni egy új változóba, ami array, és ezt kell kiíratni egy új p tagbe.*/

			let sumScore01

			for (index = 0; index < sumScore.length; index++) {
				sumScore01 = document.querySelector("#scorePlayer1").value;
				console.log(sumScore01)
			}
			


	/*buttonPlayer01.addEventListener('click', function() {
		let dice = document.querySelector("#dicePlayer013");
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
		
	
}

window.addEventListener("load", pageLoaded);
