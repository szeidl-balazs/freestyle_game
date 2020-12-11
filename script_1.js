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
			buttonPlayer1Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer1" type="button">Roll the dice!</>');
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
		buttonPlayer2Cont.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer2" type="button">Roll the dice!</>');
		let buttonPlayer02 = document.querySelector("#buttonPlayer2");

	/*A character sheet-et befoglaló container létrehozása */	
		formCont.insertAdjacentHTML('afterend', '<div class="diceContainer"><p id="scorePlayer1"><p id="scorePlayer2"></p></div');
		let diceCont = document.querySelector(".diceContainer");
		diceCont.insertAdjacentHTML('afterbegin', '<img src="img/player2_dot6.png" id="dice3">');
		let dice03 = document.querySelector("#dice3");
	
	/*Az 1-s gomb és a kocka gurítás összekapcsolása, eredmény generátor létrehozása és az 1-s játékos eredményének az 1-s scoreboardba mentése*/		
		function animate01() {
			if (document.getElementById('dice3').classList.value !== 'diceRoll') {
				dice03.classList.add("diceRoll"); /*gurítás*/
				let score1 = Math.floor(Math.random() * 6) +1; /*random eredmény generálás*/
				let scorePlayer01 = document.querySelector("#scoreBoard1");
				scorePlayer01.innerHTML = score1; /*eredmény scoreboardba mentése*/
			} else {
				dice03.classList.remove("diceRoll"); /*gurítás eltávolítása a kockáról*/
			}			
		}
		/*KIJAVÍTANI: AUTOMATIKUSAN VEGYE LE AZ ANIMÁCIÓT AZ ELSŐ KATTINTÁS UTÁN*/
		buttonPlayer01.addEventListener('click', animate01);

	/*Az 2-s gomb és a kocka gurítás összekapcsolása, eredmény generátor létrehozása és az 2-s játékos eredményének az 1-s scoreboardba mentése*/		
	function animate02() {
		if (document.getElementById('dice3').classList.value !== 'diceRoll') {
			dice03.classList.add("diceRoll"); /*gurítás*/
			let score2 = Math.floor(Math.random() * 6) +1; /*random eredmény generálás*/
			let scorePlayer02 = document.querySelector("#scoreBoard2");
			scorePlayer02.innerHTML = score2; /*eredmény scoreboardba mentése*/
			
		} else {
			dice03.classList.remove("diceRoll"); /*gurítás eltávolítása a kockáról*/
		}			
	}
	/*KIJAVÍTANI: AUTOMATIKUSAN VEGYE LE AZ ANIMÁCIÓT AZ ELSŐ KATTINTÁS UTÁN*/
	buttonPlayer02.addEventListener('click', animate02)
	
	
	function scoreDisplay02() {
		/*sumScore= []; score2= [0,1,2,3]; for (var a=0; a<score2.length; a++) { if(a==0) sumScore[a] = score2[0]; else sumScore[a] = sumScore[a-1] + score2[a];}*/	
			sumScore.push(score2);
			if (score2 === 6) { document.querySelector("#player02-figure6").src = "./img/playericon.png"}			
	}
	
	/*A generált dobókocka értékek kummulálása. ENNEK A KINYERÉSÉT MÉG MEG KELL ÍRNI!!! */
		sumScore = [];
		console.log(sumScore);


	/* Name input és a scoreboard név kijelző összekapcsolása*/
		function displayName1() {
			document.querySelector('#player1').innerHTML = nameInput1.value;
			document.querySelector('#playerHead1').innerHTML = nameInput1.value;
		}

		nameInput1.addEventListener('change', displayName1);

		function displayName2() {
			document.querySelector('#player2').innerHTML = nameInput2.value;
			document.querySelector('#playerHead2').innerHTML = nameInput2.value;
		}

		nameInput2.addEventListener('change', displayName2);

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
	
	/*BEFEJEZNI!!! A kummulált eredmények alapján a figurákat a táblán léptetni. */
	
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

	/*A VÉGEREDMÉNYT KIÍRNI GAME OVER-EL!!!*/
		

};

window.addEventListener("load", pageLoaded);
