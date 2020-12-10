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
			buttonPlayer1Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer1" type="button">Roll the dice 1</>');
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
		buttonPlayer2Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer2" type="button">Roll the dice 2</>');
		let buttonPlayer02 = document.querySelector("#buttonPlayer2");

	/*A character sheet-et befoglaló container létrehozása */	
		formCont.insertAdjacentHTML('afterend', '<div class="diceContainer"><p id="scorePlayer1"><p id="scorePlayer2"></p></div');
		let diceCont = document.querySelector(".diceContainer");
		diceCont.insertAdjacentHTML('afterbegin', '<img src="img/player2_dot3.png" class="dicePlayer13">');
		let dicePlayer013 = document.querySelector(".dicePlayer13");
	
	/* dice mozgatás balról jobbra
		buttonPlayer01.addEventListener('click', function() {
			dicePlayer013.classList.add("dicePlayer13");
		});*/

		/*buttonPlayer02.addEventListener('click', function() {
			dicePlayer013.classList.add("dicePlayer13");
		});*/

		/*eredmény generátor létrehozása*/

		
		

		 
		function scoreDisplay01() {
			let score1 = Math.floor(Math.random() * 6) +1;
			diceCont.querySelector("#scorePlayer1").innerHTML = score1;
			let scorePlayer01 = document.querySelector("#scorePlayer1");
			scorePlayer01.innerHTML = score1;			
		}

		buttonPlayer01.addEventListener('click', scoreDisplay01);

		sumScore= []

		function animate01() {
			dicePlayer013.classList.toggle("dicePlayer013");
		}

		buttonPlayer01.addEventListener('click', animate01);

		function scoreDisplay02() {
			let score2 = Math.floor(Math.random() * 6) +1;
			//sumScore= []; score2= [0,1,2,3]; for (var a=0; a<score2.length; a++) { if(a==0) sumScore[a] = score2[0]; else sumScore[a] = sumScore[a-1] + score2[a];}			
			/*dicePlayer013.classList.add("dicePlayer13");*/ 
			diceCont.querySelector("#scorePlayer2").innerHTML = score2;
			let scorePlayer02 = document.querySelector("#scorePlayer2");
			scorePlayer02.innerHTML = score2;
			sumScore.push(score2);
			if (score2 === 6) { document.querySelector("#player02-figure6").src = "./img/playericon.png"}			
		}

		buttonPlayer02.addEventListener('click', scoreDisplay02);		


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
		
	
	const firstBoard = ["player01-step1", "player01-step2", "player01-step3", "player01-step4", "player01-step5", "player01-step6", "player01-step7", "player01-step8", "player01-step9", "player01-step10", "player01-step11", "player01-step12", "player01-step13", "player01-step14", "player01-step15"]

	const firstPlayer = ["player01-figure1", "player01-figure2", "player01-figure3", "player01-figure4", "player01-figure5", "player01-figure6", "player01-figure7", "player01-figure8", "player01-figure9", "player01-figure10", "player01-figure11", "player01-figure12", "player01-figure13", "player01-figure14", "player01-figure15"]


	const firstGameBoard = document.querySelector("#player01-gameContainer");

	for (index = 0; index < firstBoard.length; index++) {

	firstGameBoard.insertAdjacentHTML("beforeend", `
		
	<div class="boardStep" id="${firstBoard[index]}">

		<img id="${firstPlayer[index]}" class="playericon" src="./img/playericon.png" alt="">

	</div>

	`);

	}

	const secondBoard = ["player02-step1","player02-step2","player02-step3","player02-step4","player02-step5","player02-step6","player02-step7","player02-step8","player02-step9","player02-step10","player02-step11","player02-step12","player02-step13","player02-step14","player02-step15"]

	const secondPlayer = ["player02-figure1", "player02-figure2", "player02-figure3", "player02-figure4", "player02-figure5", "player02-figure6", "player02-figure7", "player02-figure8", "player02-figure9", "player02-figure10", "player02-figure11", "player02-figure12", "player02-figure13", "player02-figure14", "player02-figure15"]

	const secondGameBoard = document.querySelector("#player02-gameContainer");

	for (index = 0; index < secondBoard.length; index++) {

		secondGameBoard.insertAdjacentHTML("beforeend", `
			
		<div class="boardStep" id="${secondBoard[index]}">
		
			<img id="${secondPlayer[index]}" class="playericon" src="" alt="">
		
		</div>
		
		`);
		
		}

		console.log(document.querySelector("#scorePlayer2").textContent)


		

};

window.addEventListener("load", pageLoaded);
