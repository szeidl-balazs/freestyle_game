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

		formName1Container.insertAdjacentHTML('afterbegin', '<input id="nameInputPlayer1" required autofocus></name>');
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
	
		formName2Container.insertAdjacentHTML('beforeend', '<input id="nameInputPlayer2" required autofocus></name>');
		let nameInputPlayer2 = document.querySelector("#nameInputPlayer2");
		nameInputPlayer2.setAttribute("id", "nameInputPlayer2");
		nameInputPlayer2.setAttribute("type", "text");
		nameInputPlayer2.setAttribute("placeholder", "Player2");


	/*player2 gomb létrehozása*/
		form.insertAdjacentHTML('beforeend', '<div class="buttonPlayer2Container"></div>');
		let buttonPlayer2Container = document.querySelector(".buttonPlayer2Container");
		buttonPlayer2Container.insertAdjacentHTML('afterbegin', '<button id="buttonPlayer2">Roll the dice 2</>');
		let buttonPlayer2 = document.querySelector("#buttonPlayer2");

	

		

	
		
	
	

		/*form.insertAdjacentHTML('beforeend', '<div class="formRaceContainer"></div>');
		let formRaceContainer = document.querySelector(".formRaceContainer");
		formRaceContainer.insertAdjacentHTML('afterbegin', '<select id="selectRace"></select>');
		let selectRace = document.querySelector("#selectRace");
		selectRace.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select race!</option>');
		selectRace.insertAdjacentHTML('beforeend', '<option id="aarakocra">Aarakocra</option>');
		selectRace.insertAdjacentHTML('beforeend', '<option id="aasimar">Aasimar</option>');
		selectRace.insertAdjacentHTML('beforeend', '<option id="centaur">Centaur</option>');
		selectRace.insertAdjacentHTML('beforeend', '<option id="dragonborn">Dragonborn</option>');
		selectRace.insertAdjacentHTML('beforeend', '<option id="dwarf">Dwarf</option>');*/

	/*select class létrehozása option-ökkel
		form.insertAdjacentHTML('beforeend', '<div class="formClassContainer"></div>');
		let formClassContainer = document.querySelector(".formClassContainer");
		formClassContainer.insertAdjacentHTML('afterbegin', '<select id="selectClass"></select>');
		let selectClass = document.querySelector("#selectClass");
		selectClass.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select class!</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="artificer">Artificer</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="barbarian">Barbarian</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="cleric">Cleric</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="druid">Druid</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="monk">Monk</option>');*/

		/*A character sheet-et befoglaló container létrehozása */	
		formContainer.insertAdjacentHTML('afterend', '<div class="diceContainer"></div');
		let diceContainer = document.querySelector(".diceContainer");
		diceContainer.insertAdjacentHTML('afterbegin', '<img src="/img/player2_dot3.png" id="dice_player1_3" alt="dice">');
	
		
		
	
};

window.addEventListener("load", pageLoaded);