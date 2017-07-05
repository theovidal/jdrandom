window.onload=function(){
	var content = document.getElementById('final-div');
	var paragraph = document.getElementById('paragraph');
	var form = document.getElementById('players-form');

}

function randomVideo(number){

	switch (number) {
		case 0:
			var videos = ["Pt_G2cw-5qI",
			"QoYOWKkXsck",
			"JdEzwBjyI9w",
			"3-uSqERMUss",
			"nmDHgnt9n6o",
			"OuwxEBl4hyc",
			"7FRt6q0Pzfc",
			"MDL0zZydn2Q",
			"KnOnK4bg2LY",
			"JTmb5Kp3gqY",
			"sf8C6-EIrWk",
			"BQLcgWSnNdM",
			"KCecBUpcTT0",
			"nToEPVE2Hno",
			"pfvMecHT7bI",
			"BieKXHnpieE",
			"shf6H_B3y1I",
			"bhiLSeRq9jI",
			"I7Kta8YSkdQ",
			"NZJ2mr0gWlY",
			"jrflvDj1w_A",
			"oG474xdJt6E",
			"atksnGtmvPM",
			"Lc5tANkbetY",
			"xez5qgRNrNE",
			"744ga2QpahQ",
			"SSK8JfpIrbU",
			"ucKE-7Xg2TU",
			"MtLtabuzyVY",
			"OuTdAg381zw",
			"ak3Zs43Fv4c",
			"pmueY9AzW38",
			"itr7k2HXlHw",
			"a0wnxVEV_XY",
			"n3hsNlj_KzQ",
			"7ObOM_g5Ot0",
			"rQbE5NnnWhI",
			"5dpWpyfkeFo",
			"4n8nE29hSvg",
			"kXBUY0SCNp0"];
			return videos[aleatoire(videos.length)];

		case 1:
			var videos = ["xsBNppuVVBo",
			"Fc-ML9MLQdQ",
			"cCtYbwTKeyk",
			"NP-rkhUgS6M",
			"s-PN1P_7ECU",
			"2T4fDjwSEPM",
			"a0xUqX-eQCQ",
			"p96A4mnfY0k",
			"lkCIB9h2EVQ",
			"s0rtGwLeFAw",
			"2o_45G86SGQ",
			"x1EHKtoPbEQ",
			"tQyiAsQ6m4c",
			"N0mkZ0P7gxU",
			"P5xcqcCiu2o",
			"4ch14ORtM3A",
			"Aq7Ns5J2Zvw",
			"4XcGPSc48pw",
			"HKaGXvUure0",
			"Y-4s9GS2Zmk"];
			return videos[aleatoire(videos.length)];

		case 2:
			var videos = ["YXUO_3VGw2M",
			"fVMZPQ93PVg",
			"WkzQxaMPve0",
			"lXvoS3QQLC4",
			"_DDOGfuDNkM",
			"Tq_GYNi15Sw",
			"g3CMAJFwWoI",
			"7ZGsdigUX4E",
			"n9XTdGFniWM",
			"api-BeryYSM",
			"MDlcAR911WM",
			"tUFV-K_MzZs"];
			return videos[aleatoire(videos.length)];

		case 3:
			var videos = ["tclPEggpgPk",
			"h7R5IP8sqYI",
			"pV-25QUrF0c",
			"Nt-0yK9gPv4",
			"Lhjs_qFxLXs",
			"KbWBuZcZN2s",
			"L_z4mmN-T3Q",
			"sxdmPwl6jcA",
			"y7KOPoOPNyc",
			"GJxkmeysy6s",
			"6Nxq87Lk5DE",
			"r7YWe8CCMiY",
			"9W8CLdJ5Ft4",
			"PgMx6jr7RjY",
			"olv9jsDqsAY"];
			return videos[aleatoire(videos.length)];

		default:
			return "55VPB9qnhW8";

	}

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
	document.getElementById('final-div').style.display = "flex";

	var players = document.getElementById('input-players').value.split(";")

	switch (determineType(players.length)) {
		case 0:
			
			var toUse = aleatoire(players.length);
			document.getElementById('role').innerHTML = players[toUse]+' - Solo';
			document.getElementById('dance').innerHTML = "<iframe frameBorder=\"0\" src=\"https://www.youtube-nocookie.com/embed/"+randomVideo(0)+"\">Navigateur non compatible.</iframe>";
			break;

		case 1:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML = players[toUse]+' et '+players[toUseTwo]+' - Duo';
			document.getElementById('dance').innerHTML = "<iframe frameBorder=\"0\" src=\"https://www.youtube-nocookie.com/embed/"+randomVideo(1)+"\">Navigateur non compatible.</iframe>";

			break;

		case 2:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			var toUseThree = toUseTwo;

			while ((toUseThree == toUse) |- (toUseThree == toUseTwo)) {
				var toUseThree = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML = players[toUse]+', '+players[toUseTwo]+' et '+players[toUseThree]+' - Trio';
			document.getElementById('dance').innerHTML = "<iframe frameBorder=\"0\" src=\"https://www.youtube-nocookie.com/embed/"+randomVideo(2)+"\">Navigateur non compatible.</iframe>";

			break;

		case 3:

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			var toUseThree = toUseTwo;

			while (toUseThree == toUse || toUseThree == toUseTwo) {
				var toUseThree = aleatoire(players.length);
			}

			var toUseFour = toUseThree;

			while (toUseFour == toUse || toUseFour == toUseTwo || toUseFour == toUseThree) {
				var toUseFour = aleatoire(players.length);
			}

			document.getElementById('role').innerHTML = players[toUse]+', '+players[toUseTwo]+', '+players[toUseThree]+' et '+players[toUseFour]+' - Quatro';
			document.getElementById('dance').innerHTML = "<iframe frameBorder=\"0\" src=\"https://www.youtube-nocookie.com/embed/"+randomVideo(3)+"\">Navigateur non compatible.</iframe>";		

			break;

		case 404:


			break;
	}

	// document.getElementById('role').innerHTML += players[toUse];
	
}
