function pageLoaded() {

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
		
			<img id="${secondPlayer[index]}" class="playericon" src="./img/playericon.png" alt="">
		
		</div>
		
		`);
		
		}
}

window.addEventListener("load", pageLoaded);
