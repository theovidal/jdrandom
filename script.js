window.onload=function(){
	var content = document.getElementById('final-div');
	var paragraph = document.getElementById('paragraph');
	var form = document.getElementById('players-form');

	
}

function aleatoire(number) { 
	return Math.floor(Math.random() * (number));
} 

function determineType (number) {

	switch (number) {
		case 2:
			return aleatoire(2);

		case 3:
			return aleatoire(3);

		case 4:
			return aleatoire(4);

		case 5:
			return aleatoire(4);

		case 6:
			return aleatoire(4);

		case 7:
			return aleatoire(4);

		case 8:
			return aleatoire(4);

		case 9:
			return aleatoire(4);

		case 10:
			return aleatoire(4);

		default:
		 return 404;
	}
}

function valid () {
	document.getElementById('players-form').style.display = "none";
	document.getElementById('final-div').style.display = "block";

	var players = document.getElementById('input-players').value.split(";")
	players.forEach(function(element) {
		document.getElementById('paragraph').innerHTML += element;
		document.getElementById('paragraph').innerHTML += " - ";
	});

	document.getElementById('paragraph').innerHTML += toUse;
	document.getElementById('paragraph').innerHTML += " - ";
	document.getElementById('paragraph').innerHTML += players.length;

	switch (determineType(players.length)) {
		case 0:
			
			var toUse = aleatoire(players.length);
			document.getElementById('role').innerHTML += players[toUse]+' - Solo';
			break;

		case 1:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML += players[toUse]+' et '+players[toUseTwo]+' - Duo';

			break;

		case 2:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			var toUseThree = toUseTwo;

			while ((toUseThree != toUse) && (toUseThree == toUseTwo)) {
				var toUseThree = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML += players[toUse]+', '+players[toUseTwo]+' et '+players[toUseThree]+' - Trio';

			break;

		case 3:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			var toUseThree = toUseTwo;

			while (toUseThree != toUse && toUseThree == toUseTwo) {
				var toUseThree = aleatoire(players.length);
			}

			var toUseFour = toUseThree;

			while (toUseFour != toUse && toUseFour != toUseTwo && toUseFour == toUseThree) {
				var toUseFour = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML += players[toUse]+', '+players[toUseTwo]+', '+players[toUseThree]+' et '+players[toUseFour]+' - Quatro';

			break;

		case 404:


			break;
	}

	// document.getElementById('role').innerHTML += players[toUse];
	
}
