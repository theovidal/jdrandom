function song(title, ytid, game){
	var song = {
		title: title,
		ytid: ytid,
		game: game
	}
	return song;
}

function getAllDances(){

	var songs = [];
	songs.push.apply(songs, getSoloDances());
	songs.push.apply(songs, getDuoDances());
	songs.push.apply(songs, getTrioDances());
	songs.push.apply(songs, getQuatroDances());

	return songs;
}

function isset(  ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: FremyCompany
    // +   improved by: Onno Marsman
    // *     example 1: isset( undefined, true);
    // *     returns 1: false
    // *     example 2: isset( 'Kevin van Zonneveld' );
    // *     returns 2: true
   
    var a=arguments; var l=a.length; var i=0;
   
    if (l==0) {
        throw new Error('Empty isset');
    }
   
    while (i!=l) {
        if (typeof(a[i])=='undefined' || a[i]===null) {
            return false;
        } else {
            i++;
        }
    }
    return true;
}

window.onload=function(){

	var tag = document.createElement('script');
 
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var content = document.getElementById('final-div');
	var paragraph = document.getElementById('paragraph');
	var form = document.getElementById('players-form');

	form.oninput = function(){
		if($("#players-form").html().split("").length == 0){
			$("#players-form").addClass("invalid");
		}else if($("#players-form").html().split("").length >= 1){
			$("#players-form").addClass("valid");
		}
	};

	$(".button-collapse").sideNav();

	var soloDances = "";
	var duoDances = "";
	var trioDances = "";
	var quatroDances = "";

	var i1 = 0;
	while (getSoloDances()[i1]) {
	    soloDances = soloDances+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, 1), 1)">'+getSoloDances()[i1].title+'</a></li>';
	    i1++;
	}

	var i2 = 0;
	while (getDuoDances()[i2]) {
	    duoDances = duoDances+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, 2), 2)">'+getDuoDances()[i2].title+'</a></li>';
	    i2++;
	}

	var i3 = 0;
	while (getTrioDances()[i3]) {
	    trioDances = trioDances+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, 3), 3)">'+getTrioDances()[i3].title+'</a></li>';
	    i3++;
	}

	var i4 = 0;
	while (getQuatroDances()[i4]) {
	    quatroDances = quatroDances+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, 4), 4)">'+getQuatroDances()[i4].title+'</a></li>';
	    i4++;
	}

	var i4 = 0;
	while (getQuatroDances()[i4]) {
	    quatroDances = quatroDances+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, 4), 4)">'+getQuatroDances()[i4].title+'</a></li>';
	    i4++;
	}

	var jd0 = "";
	var jd1 = "";
	var jd2 = "";
	var jd3 = "";
	var jd4 = "";
	var jd2014 = "";
	var jd2015 = "";
	var jd2016 = "";
	var jd2017 = "";
	var jd2018 = "";

	var i5 = 0;
	while (getAllDances()[i5]) {
		//console.log(getAllDances()[i5]+" "+getAllDances()[i5].game);
		switch(getAllDances()[i5].game){
			case 0:
				jd0 = jd0+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 1:
				jd1 = jd1+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2:
				jd2 = jd2+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 3:
				jd3 = jd3+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 4:
				jd4 = jd4+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2014:
				jd2014 = jd2014+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2015:
				jd2015 = jd2015+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2016:
				jd2016 = jd2016+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2017:
				jd2017 = jd2017+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
			case 2018:
				jd2018 = jd2018+'<li><a onclick="setDance(getDanceByTitle(this.innerHTML, '+getDanceMode(getAllDances()[i5].ytid)+'), '+getDanceMode(getAllDances()[i5].ytid)+')">'+getAllDances()[i5].title+'</a></li>';
				break;
		}
		i5++;
	}
		
	//console.log(getAllDances().toString());

	document.getElementById("jd0").innerHTML = jd0;
	document.getElementById("jd1").innerHTML = jd1;
	document.getElementById("jd2").innerHTML = jd2;
	document.getElementById("jd3").innerHTML = jd3;
	document.getElementById("jd4").innerHTML = jd4;
	document.getElementById("jd2014").innerHTML = jd2014;
	document.getElementById("jd2015").innerHTML = jd2015;
	document.getElementById("jd2016").innerHTML = jd2016;
	document.getElementById("jd2017").innerHTML = jd2017;
	document.getElementById("jd2018").innerHTML = jd2018;

	document.getElementById("soloDances").innerHTML = soloDances;
	document.getElementById("duoDances").innerHTML = duoDances;
	document.getElementById("trioDances").innerHTML = trioDances;
	document.getElementById("quatroDances").innerHTML = quatroDances;

	$( "html" ).removeClass( "loading" );

}

var players = [];

function getDanceByTitle(title, mode){

	var i = 0;
	var song = {
		title: "Erreur",
		ytid: "lAXJVkeBuGw"
	}
	switch(mode){

		case 1:
			while (getSoloDances()[i]) {
			    if(getSoloDances()[i].title.toLowerCase() == title.toLowerCase()){
			    	song = getSoloDances()[i];
			    }
			    i++;
			}
			break;
		case 2:
			while (getDuoDances()[i]) {
			    if(getDuoDances()[i].title.toLowerCase() == title.toLowerCase()){
			    	song = getDuoDances()[i];
			    }
			    i++;
			}
			break;
		case 3:
			while (getTrioDances()[i]) {
			    if(getTrioDances()[i].title.toLowerCase() == title.toLowerCase()){
			    	song = getTrioDances()[i];
			    }
			    i++;
			}
			break;
		case 4:
			while (getQuatroDances()[i]) {
			    if(getQuatroDances()[i].title.toLowerCase() == title.toLowerCase()){
			    	song = getQuatroDances()[i];
			    }
			    i++;
			}
			break;

	}

	return song;

}

function getDanceMode(ytid){

	var mode = 0;
	var ytid = ytid;
	var i = 0;
	while (getSoloDances()[i]) {
		if(getSoloDances()[i].ytid.toLowerCase() == ytid.toLowerCase()){
			mode = 1;
		}
		i++;
	}

	i = 0;
	while (getDuoDances()[i]) {
		if(getDuoDances()[i].ytid.toLowerCase() == ytid.toLowerCase()){
			mode = 2;
		}
		i++;
	}

	i = 0;
	while (getTrioDances()[i]) {
		if(getTrioDances()[i].ytid.toLowerCase() == ytid.toLowerCase()){
			mode = 3;
		}
		i++;
	}

	i = 0;
	while (getQuatroDances()[i]) {
		if(getQuatroDances()[i].ytid.toLowerCase() == ytid.toLowerCase()){
			mode = 4;
		}
		i++;
	}

	return mode;

}

function setDance(song, mode){
	document.getElementById('names').innerHTML = '<b>FREESTYLE</b>!';
	switch(mode){
		case 1:
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/solo.png">';
			var sound = new Audio("sounds/solo.mp3");
			sound.play();
			break;
		case 2:
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/duo.png">';
			var sound = new Audio("sounds/duo.mp3");
			sound.play();
			break;
		case 3:
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/trio.png">';
			var sound = new Audio("sounds/trio.mp3");
			sound.play();
			break;
		case 4:
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/quatro.png">';
			var sound = new Audio("sounds/quatro.mp3");
			sound.play();
			break;
	}
	document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
	if(document.getElementById('autoplay').checked){
		document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
		document.getElementById('preview-song').innerHTML = "";
	}else{
		document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/maxresdefault.jpg\">";
		$("#dance").click(function(){
			video(song.ytid);
		});
		document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
	}
	$('.collapsible').collapsible('close', 0);
	$('.button-collapse').sideNav('hide');
}

function getSoloDances(){
	var videos = [song("It's Raining Men", "7St0NnVMN4Y", 2),
			song("Tik Tok", "SmwK07qLqXc", 2),
			song("I Got You (I Feel Good)", "XOvwo3QxL4s", 2),
			song("Toxic", "pzpO36EyDA8", 2),
			song("S.O.S", "GXpxltpRzqY", 2),
			song("Dagomba", "GRAqn78FkJo", 2),
			song("Move Your Feet", "ycc6Ge0lVPo", 2),
			song("Big Girl (You Are Beautiful)", "V7Z-WWl1wak", 2),
			song("I Want You Back", "06jv6CyGPL0", 2),
			song("Holiday", "5cVQDqEqiAs", 2),
			song("Satisfaction", "d_Iq5NuB430", 2),
			song("Hey Ya!", "x0-26JyMG-A", 2),
			song("Crazy in Love", "GSXx2qi1aAE", 2),
			song("Wake Me Up Before You Go-Go", "7LCYtthW1zE", 2),
			song("The Power", "yMXqWITRAh8", 2),
			song("Monster Mash", "DRj_MUvy6F0", 2),
			song("Rockafeller Skank", "9-li_iD1coI", 2),
			song("Funkytown", "Wyr10AwAVfY", 2),
			song("Jai Ho (You Are My Destiny)", "uLd4e4NiGpo", 2),
			song("Let's Get It Started", "KodNpcmi9C4", 2),
			song("Girls Just Want To Have Fun", "iWOatbe3lSQ", 1),
			song("Ring My Bell", "54Hl7ZX-1GI", 1),
			song("Cotton Eye Joe", "ZxaGchqDU1s", 1),
			song("Womanizer", "zxbUOcdHdms", 1),
			song("Groove Is In The Heart", "9Nw13Ln8ZcU", 1),
			song("Heart Of Glass", "Els-S7d5moI", 1),
			song("I Like To Move It", "K4jZmZJB768", 1),
			song("Hot n Cold", "4iAQcAz__80", 1),
			song("Fame", "rTXl9xs7t_c", 1),
			song("Pump Up The Jam", "SD-nGMyU514", 1),
			song("Le Freak", "EnXrmQi_qAk", 1),
			song("That's The Way", "UQEyC5yKw0s", 1),
			song("Eye Of The Tiger", "_QV1xD8Fvf0", 1),
			song("Can't Get You Out of My Head", "i7BvSl_0mG4", 1),
			song("Acceptable In The 80s", "_5-K3o-BrRY", 1),
			song("Who Let The Dogs Out", "lNF1zMV4kL4", 1),
			song("Wannabe", "FpbkzwgKlf8", 1),
			song("U Can't Touch This", "2lnYqSQsYAk", 1),
			song("California Gurls", "PLA1WVW9LFQ", 3),
			song("Pump It", "usEQHL_ZN8s", 3),
			song("Lollipop", "zCEWBmG4UIA", 3),
			song("Price Tag", "jncgXSNEeBM"),
			song("I Don't Feel Like Dancin'", "EFJp4FFWNlU", 3),
			song("Barbra Streisand", "qj8h8jr7fdM", 3),
			song("Venus", "4lLb9Phdzj4", 3),
			song("Teenage Dream", "L7QFG6cyai8", 3),
			song("Only Girl (In The World)", "Ncc4DFkZ1_w", 3),
			song("Forget You", "nxydZe7JB0Q", 3),
			song("Gonna Make You Sweat (Everybody Dance Now)", "-kB6iO25DD0", 3),
			song("What Are You Waiting For?", "RkZdZ2PJLs8", 3),
			song("E.T", "gkqWbpdmwB0", 3),
			song("Boom", "PzVvnvZwnjM", 3),
			song("Dance All Nite", "t51CfyVYvcw", 3),
			song("Party Rock Anthem", "03O6A5Uu-Fs", 3),
			song("She's Got Me Dancing", "Cwbp1VAoEN0", 3),
			song("Let's Go To The Mall", "C0Fkrp04XnU", 3),
			song("I'm So Excited", "kZ15tjI3aog", 3),
			song("Video Killed The Radio Star", "y7yCbhNvQLo", 3),
			song("Giddy on Up (Giddy on Out)", "tYu4tFJnv3g", 3),
			song("Airplanes", "a8jOyy5USpE", 3),
			song("Baby Don't Stop Now", "DWm8EwlGFUo", 3),
			song("Call Me Maybe", "6DvEMAx5T9w", 4),
			song("Call Me Maybe #alternative", "QUWx7emETI8", 4),
			song("Good Feeling", "XB9egZbqDDM", 4),
			song("Disturbia", "ocIYCVk8ANE", 4),
			song("Hot For Me", "3UeCwiefqmw", 4),
			song("We No Speak Americano", "005VW7dBrCU", 4),
			song("Beauty And A Beat", "Qe3fkLGzbKA", 4),
			song("Crazy Little Thing", "-4hpGvAeSNw", 4),
			song("On The Floor", "gZrjFbHahf8", 4),
			song("Never Gonna Give You Up", "wlDyhYiQf0A", 4),
			song("Maneater", "8YereQepI7A", 4),
			song("Super Bass", "RLD_PDzzLfI", 4),
			song("Livin' La Vida Loca", "Yg9y5tIU-c8", 4),
			song("Oh No!", "QdMl9X0M4Aw", 4),
			song("Love You Like A Love Song", "x1OJZ_X94W8", 4),
			song("Make The Party (Don't Stop)", "0pCYi5GJ3Zs", 4),
			song("Moves Like Jagger", "qJI4Ut3fc7Q", 4),
			song("So What", "O7jT_EQ355w", 4),
			song("Mas Que Nada", "M08aNqLhYg4", 4),
			song("Hit 'Em Up Style (Oops!)", "Y_lcI9F1594", 4),
			song("Mr. Saxobeat", "f0qp0Jh5_gg", 4),
			song("Rock n' Roll (Will Take You to the Mountain)", "J9AqL9ddcn0", 4),
			song("You Make Me Feel", "bhiLSeRq9jI", 4),
			song("Brand New Start", "VVqiPNFVpLI", 4),
			song("Good Girl", "Dx9EBRdWcK0", 4),
			song("Umbrella", "roEKnIhQIB4", 4),
			song("Umbrella #parapluie", "HasJKZRA5U4", 4),
			song("Cercavo Amore", "JxihJxf2qPU", 4),
			song("Diggin' In The Dirt", "pmEDkFReI7U", 4),
			song("Ain't No Other Man", "K8mXwOQtDno", 4),
			song("Ain't No Other Man #puppetmaster", "gjXQe7rLp14", 4),
			song("Domino", "6t_yer7kIFo", 4),
			song("Want U Back", "TCw7It7hCd0", 4),
			song("Run The Show #alternative", "yIQ6MdXjfAg", 4),
			song("Tribal Dance #alternative", "MI5f6W5FNVM", 4),
			song("What Makes You Beautiful #alternative", "prvu_wJShmo", 4),
			song("Wild Wild West #alternative", "UoYnq13lD00", 4),
			song("So Good", "xEIvbxrnIYs", 4),
			song("Good Feeling #alternative", "uKAuWv3cCqQ", 4),
			song("Love You Like A Love Song #puppetmaster", "5FZV4Dhu3M0", 4),
			song("Mr. Saxobeat", "0f4GHiAFMmk", 4),
			song("Uptown Funk #puppetmaster", "Js07g1TqBFE", 2016),
			song("Teacher #puppetmaster", "9WtAA7oGNQ0", 2016),
			song("All About That Bass #puppetmaster", "mCimOeIhOCM", 2016),
			song("Built For This #puppetmaster", "IUeV1BBIoQA", 2015),
			song("Born This Way #puppetmaster", "Dg5bbyReJBw", 2016),
			song("Automaton #fanmade", "FRS719uKxdk", 2018),
			song("Make It Jingle #fanmade", "JNgzDA2gO_s", 2018),
			song("24k Magic #fanmade", "OKLz_-1Jnvw", 2018),
			song("Holding Out For A Hero #puppetmaster", "4y0k5EyaDys", 2015),
			song("Birthday #puppetmaster", "OfgPiRQeTeQ", 2015),
			song("Summer #puppetmaster", "p9w1POyS-Ls", 2015),
			song("Where Have You Been #puppetmaster", "6oVcGnp56SU", 2014),
			song("Maps #puppetmaster", "Lpx4W7_6UPA", 2015),
			song("Chick Chick", "-rXy99vYG2k", 0),
			song("Want To Want Me #puppetmaster", "JUw9jBRUZvk", 2016),
			song("Part Of Me", "BL21enjiPFs", 4),
			song("Funhouse", "sbbeVgzjl74", 4),
			song("We R Who We R", "RhokF3DoI1o", 4),
			song("Hit The Lights", "w-M78GBntJI", 4),
			song("So Glamorous", "f0rPo_EeplY", 4),
			song("Heavy Cross", "uaqRCZi0VZA", 4),
			song("Primadonna", "nd6dST5UBOQ", 4),
			song("The Lazy Song", "ZQrl3VCCw64", 4),
			song("Gold Dust", "dX5VJBp5VFc", 4),
			song("Troublemaker", "KCecBUpcTT0", 2014),
			song("Troublemaker #sweat", "saemKtKy0zE", 2014),
			song("Feel So Right", "FGewP7DWCtc", 2014),
			song("Fine China", "BQLcgWSnNdM", 2014),
			song("Fine China #alternative", "c36e6K80LSY", 2014),
			song("Applause", "0fi0nIQcU80", 2014),
			song("Applause #alternative", "P_5ZUcR0S8g", 2014),
			song("I Will Survive", "_wnO9LJzeWg", 2014),
			song("Love Boat", "pgAeY3I8p5M", 2014),
			song("Flashdance... What A Feeling", "DHpa-vg3Ox0", 2014),
			song("Flashdance... What A Feeling #puppetmaster", "Qo4p1zD09pc", 2014),
			song("She Wolf", "nLfyBo-XjlM", 2014),
			song("Just Dance", "sKfmeCTJiEs", 2014),
			song("Just Dance #sweat", "g0QnV5x8j6U", 2014),
			song("Wild", "HR6ZFPHYd4c", 2014),
			song("Gentleman", "OjJ228jwLgs", 2014),
			song("Gentleman #sweat", "sdwO4aWLtJE", 2014),
			song("Where Have You Been", "ScT1Ytl8wkc", 2014),
			song("Gimme! Gimme! Gimme!", "PJ0HinsiPo4", 2014),
			song("Maria", "ocuW-yMY-G0", 2014),
			song("Starships", "hKAokFDcwGY", 2014),
			song("Feel This Moment", "yNZUBww-vHQ", 2014),
			song("Follow The Leader", "tuzy0Dk-u_M", 2014),
			song("Rich Girl ", "1c3tDplNmG0", 2014),
			song("Rich Girl #chaise", "hr5k1RvOjnw", 2014),
			song("I Kissed A Girl", "0pWsPD1gv1I", 2014),
			song("I Kissed A Girl #sweat", "0x-cN298mkY", 2014),
			song("It's You", "wAzutB2i_mI", 2014),
			song("It's You #sweat", "Unxsk_-uNdE", 2014),
			song("Miss Understood", "WNQCPVE-Y9E", 2014),
			song("The Other Side", "MlQv_QEbufk", 2014),
			song("Dançando", "z8c7jQ7HeAs", 2014),
			song("Danse", "MDL0zZydn2Q", 2014),
			song("Alfonso Signorini (eroe nazionale)", "KnOnK4bg2LY", 2014),
			song("Safe And Sound", "L5Ivqz9GFPk", 2014),
			song("Waking Up In Vegas", "IB8PECW8oDo", 2014),
			song("Blurred Lines #alternative", "spQhD1yQ9rc", 2014),
			song("Turn Up The Love #fanmade", "_cNI7OvwrZI", 2014),
			song("Pound The Alarm #alternative", "6Ebf77b0DSU", 2014),
			song("#thatPower #alternative", "q_eMEF3xSzk", 2014),
			song("Ghostbusters #sweat", "fPLIdiMG05I", 2014),
			song("We Can't Stop", "RB5H9MEHd4w", 2014),
			song("Man Down", "ckXPnu94ODQ", 2014),
			song("Roar", "C3PAHgreSJo", 2014),
			song("Wake Me Up", "J-GUzoOZAZU", 2014),
			song("Can't Hold Us", "Kw0Aj6TKptE", 2014),
			song("What About Love", "ssStbtrYOfE", 2014),
			song("One Way Or Another", "3_jfgXK1oR0", 2014),
			song("Sexy And I Know It", "IJ9xReLqIRk", 2014),
			song("American Girl", "8NrK-59xWDI", 2014),
			song("My Main Girl", "wBqHoBWbngk", 2014),
			song("I Need Your Love", "Evuj9KlS1wM", 2014),
			song("Can't Get Enough", "dD8Me7iN1bA", 2014),
			song("Don't You Worry Child", "jGR2N10onpw", 2014),
			song("Rock n Roll", "wh1ftlu4N4U", 2014),
			song("The World Is Ours", "U4S4HlvBIzw", 2014),
			song("It's My Birthday #alternative", "wXERSWv_8pk", 2015),
			song("Happy", "D8lA2nJ2yRs", 2015),
			song("Love Me Again", "jx49TtH72lA", 2015),
			song("Till I Found You", "cj_bvMhv-sg", 2015),
			song("Never Can Say Goodbye", "mJxCKoxWNuA", 2015),
			song("Birthday", "otWeDrOWq08", 2015),
			song("Mouvement Is Happiness", "ijJa_nmgvv0", 2015),
			song("Build For This", "BTC30b3I_zw", 2015),
			song("Holding Out For A Hero", "vm7ll0cRfVo", 2015),
			song("Diamonds", "mnazyRWMELs", 2015),
			song("Maps", "tBqMQbxe68k", 2015),
			song("You Spin Me Round", "KeGzrBcaluM", 2015),
			song("I Love It", "s0kwXIlaOGc", 2015),
			song("Problem", "5q7-XRYQRw8", 2015),
			song("Burn", "T5eneYpa0Tw", 2015),
			song("Addicted To You", "HbslypioNsA", 2015),
			song("Summer", "KRGDT-5JLlA", 2015),
			song("Summer #sweat", "DM0ri4TsCS0", 2015),
			song("Black Window", "MSBLUVpsez0", 2015),
			song("Let It Go #alternative", "uu6r-qg3LMg", 2015),
			song("Papaoutai #alternative", "EBxrh6bKJPA", 2015),
			song("Walk This Way #alternative", "R3DI4cLxHHM", 2015),
			song("Break Free", "Scflq-tjL-c", 2015),
			song("I Luh Ya Papi", "KygODsjJRFY", 2015),
			song("Boom Clap", "zOtrSXyVRUk", 2015),
			song("Kiss Kiss", "fUVtMZ9XWPQ", 2015),
			song("All About That Bass", "JTmb5Kp3gqY", 2016),
			song("Born This Way #alternative", "lV_ztTAyFII", 2016),
			song("Under The Sea", "ocJs9SAKRGI", 2016),
			song("Stadium Flow", "Q-pUPS8f274", 2016),
			song("Heartbeat Song", "d096g28-Fhw", 2016),
			song("Ievan Polkka", "SzMZlOsj_ok", 2016),
			song("Drop The Mambo", "OSovq81i_e0", 2016),
			song("These Boots Are Made For Walking", "IqPcjgm0nQo", 2016),
			song("Lights", "0JwKh023V4I", 2016),
			song("Chiwawa", "PBtHXNDlg6g", 2016),
			song("Chiwawa #alternative", "NZJ2mr0gWlY", 2016),
			song("I Gotta Feeling", "L446CMoGDCY", 2016),
			song("The Choice Is Yours", "yCY7j3sgbUo", 2016),
			song("Cool For The Summer", "bibdDPuo0MM", 2016),
			song("Stuck On A Feeling", "hEggA05LfFk", 2016),
			song("Teacher", "RC4zQ5Y4qlg", 2016),
			song("I'm An Albatraoz", "hsqi_qRpwp0", 2016),
			song("Want To Want Me", "2zwtD32rVr0", 2016),
			song("Rabiosa", "9MQ7KkEgeLc", 2016),
			song("Rabiosa #sweat", "bt3EiweB_fQ", 2016),
			song("Blame", "CLWFBQph3c8", 2016),
			song("Uptown Funk", "McWNUoF_WG4", 2016),
			song("Smile", "XybeONda5bY", 2016),
			song("Kaboom Pow", "Qpf3uO8abtg", 2016),
			song("Fun", "HHYALgIxwtc", 2016),
			song("Circus #alternative", "KYmIau0afIw", 2016),
			song("This Is How We Do #alternative", "KSmo508oLLY", 2016),
			song("Better When I'm Dancin'", "pjYGiH5CEY8", 2016),
			song("Taste The Feeling", "hWVHr4sswTU", 2016),
			song("Taste The Feeling #alternative", "gBMLKnsUN50", 2016),
			song("Am I Wrong", "Sdr06SxWUtY", 2016),
			song("Hold My Hand", "fPA-cIJuXws", 2016),
			song("Stadium Flow #fanmade", "kQWWMMgJX2A", 2016),
			song("This Is How We Do #fanmade", "OWm5oMVHWVE", 2016),
			song("September #alternative", "8O8IkyTPlDw", 2017),
			song("Bang", "nf6DrPeIjrI", 2017),
			song("Cheap Thrills", "wfEjnQVOb3o", 2017),
			song("Sorry", "nb10K7afRNY", 2017),
			song("Sorry #alternative", "lqzpVvwocic", 2017),
			song("I Love Rock 'N' Roll", "CkdAPoDa76Y", 2017),
			song("Wherever I Go", "CZBSBuTr9qk", 2017),
			song("RADICAL", "fPuwridEkng", 2017),
			song("Like I Would", "zL1rCTC9NE4", 2017),
			song("Into You", "syPcs90Gy80", 2017),
			song("Don't Wanna Know", "W2rHAKMX66E", 2017),
			song("Carnival Boom", "lmJrK7KmErQ", 2017),
			song("Bonbon", "ONcF2ca1LRs", 2017),
			song("Worth It", "744ga2QpahQ", 2017),
			song("Cola Song", "Cv7M-KYi6l0", 2017),
			song("Cake By The Ocean", "oRY_wV7nQ78", 2017),
			song("Single Ladies", "-f-AmesaWYs", 2017),
			song("Don't Stop Me Now", "6JuUTaMmZ5Q", 2017),
			song("Don't Stop Me Now #alternative", "cdZ0VJdWvQQ", 2017),
			song("Can't Feel My Face", "LkG1X3cRFkw", 2017),
			song("Hips Don't Lie", "V0jcc1TgFJM", 2017),
			song("Titanium", "ZFGidhb-lPU", 2017),
			song("What Is Love", "I3KR7ddwx1U", 2017),
			song("Run The Night", "b8T1tX7TSnA", 2017),
			song("Bailar", "kXBUY0SCNp0", 2017),
			song("Oishii Oishii #fanmade", "kGsv2DWQ9rE", 2017),
			song("Lean On #alternative", "iC8r1ofSIkk", 2017),
			song("YOUTH", "PnTL7I8tLoc", 2017),
			song("Imya 505", "KZplK-kQDzI", 2017),
			song("Je sais pas danser", "pfvMecHT7bI", 2017),
			song("The Greatest", "ak3Zs43Fv4c", 2017),
			song("Me Too", "BieKXHnpieE", 2017),
			song("How Deep Is Your Love", "QoYOWKkXsck", 2017),
			song("Ain't My Fault", "JdEzwBjyI9w", 2017),
			song("Automaton", "aBr5rrZyiDc", 2018),
			song("Side To Side", "Arum969G1xQ", 2018),
			song("Naughty Girl", "VtXlqRZd7Zs", 2018),
			song("Make It Jingle", "dPX_8E5CZzM", 2018),
			song("Daddy Cool #jd2018", "nKOuRLpSDQ0", 2018),
			song("Daddy Cool", "pGJATkB4CWE", 2018),
			song("Millionaire #fanmade", "HGiE1yTC_2o", 0),
			song("This Is What You Came For #fanmade", "n4xRbQseUjY", 0),
			song("Paris #fanmade", "mORHPuU8AVQ", 0),
			song("Rockabye #fanmade", "uAPQjN0zDnk", 2018),
			song("Shape Of You #fanmade by Redoo", "zAgUrkk-srI", 0),
			song("Chained To The Rhythm #fanmade", "5Xchmyv5WFQ", 0),
			song("Love Myself #fanmade by Redoo", "pLmCJ3cCw3Q", 0),
			song("Talk Dirty #fanmade by Redoo", "H9D_A7cPhog", 0),
			song("South Beach Stars #fanmade by Redoo", "kYZWIbwVO2k", 0),
			song("Somewhere To Run #fanmade by Redoo", "vhTt-KV5ef0", 0),
			song("Hey Ma #fanmade by Redoo", "PcgrBa70jlU", 0),
			song("Ain't My Fault #fanmade", "GxLhpJfLRJI", 0),
			song("Footloose", "-KShMZfZxzY", 2018),
			song("John Wayne", "5pdbjK4zsP8", 2018),
			song("John Wayne #fanmade", "n44-UxDoAy4", 2018),
			song("Kissing Strangers #fanmade", "12KqG2g24no", 2018)];
			return videos;
}

function getDuoDances() {
	var videos = [song("A-Punk", "bcTy2MaKvg4", 2),
			song("Girlfriend", "rkNHlJSGcv4", 2),
			song("Hot Stuff", "C7fYcYlOklk", 2),
			song("Katti Kalandal", "aUwk_02S1Ww", 2),
			song("Sway", "EnQwOsnFw5I", 2),
			song("Soul Bossa Nova", "Nne8qM6shQo", 2),
			song("Jump In The Line", "FL58fasm6wY, 2"),
			song("Jump", "H8mxgMuTrz4", 2),
			song("Alright", "85mNIDXEN4s", 2),
			song("Promiscuous", "KFA_jdR_ivI", 3),
			song("No Limit", "ihw5NPCW2Lg", 3),
			song("Jump (For My Love)", "wqiuKlcNGsU", 3),
			song("Da Funk", "QsMk9m2QScM", 3),
			song("Beautiful Liar", "eMvnMMeZiRA", 3),
			song("Somethin' Stupid", "ROefbOm4rjs", 3),
			song("Jambo Mambo", "G-8Juj8Qy6U", 3),
			song("Hungarian Dance No. 5", "tbjlTgo-bnA", 3),
			song("Mamasita", "5nZqG794Zag", 3),
			song("Jamaican Dance", "2iRBqj54QZU", 4),
			song("Rock Lobster", "dKmpFmSzX6Q", 4),
			song("Aserejé", "InL70jgnc0w", 4),
			song("Can’t Take My Eyes Off You", "ktVG5CFRcTQ", 4),
			song("The Final Countdown", "oBk1i7SLLWo", 4),
			song("(I've Had) The Time Of My Life", "wxEIXUCzj6I", 4),
			song("I Like It", "5Vlpv4-V9j0", 4),
			song("Run The Show", "uoFVc3WFAAM", 4),
			song("Tribal Dance", "0hZcNcWARFE", 4),
			song("Gangnam Style", "9r5b52AkSvI", 4),
			song("One Thing", "tQyiAsQ6m4c", 4),
			song("Oath", "erEh5G5HG_U", 4),
			song("Die Young", "fXxTgyEQz7Y", 4),
			song("Starships #alternative", "qJr-xpBIWVs", 2014),
			song("Nitro Bot", "w-xxrt_Zz6Y", 2014),
			song("99 Luftballons", "nWMATeA-Pwg", 2014),
			song("Candy", "9Mz48fXx8uc", 2014),
			song("Limbo", "wPDp_UQfdec", 2014),
			song("Just A Gigolo", "0dqFJLJ8jZk", 2014),
			song("Blurred Lines", "x1-o62z2_q8", 2014),
			song("Blurred Lines #fanmade", "nFwauUJY064", 2014),
			song("Could You Be Loved", "OfN-16IYNvE", 2014),
			song("Turn Up The Love", "9l7IuYJ6xCY", 2014),
			song("Get Lucky", "nPCyN7BqIm4", 2014),
			song("Careless Whisper", "1AXyVDB5PkI", 2014),
			song("C'mon", "OMXSGsfxRxA", 2014),
			song("The Way", "N6jL1NvrsH0", 2014),
			song("Timber", "5mgcXDQ8E2Y", 2014),
			song("Chantaje #fanmade", "xmzyDsgwWCY", 2018),
			song("The Fox #alternative", "gUufRyeixVA", 2015),
			song("Diamonds #alternative", "7ROmejncxjQ", 2015),
			song("I Love It #alternative", "fYjFuWroCUs", 2015),
			song("Let It Go", "ZspUn6Ugcdk", 2015),
			song("Only You (And You Alone)", "f_KmFFl7hVY", 2015),
			song("Xmas Tree", "6YLKPZU4fqI", 2015),
			song("Me And My Broken Heart", "6b6OZDJsGpE", 2015),
			song("Love Is All", "2K_3wbo9ptc", 2015),
			song("Ain't No Moutain High Enough", "9xKUT980O2g", 2015),
			song("Bailando", "1TpXup5KvAA", 2015),
			song("Get Low", "GwXOBL4-X4Q", 2015),
			song("Papaoutai", "M0viCdSYpPM", 2015),
			song("Speedy Gonzales", "8cWHj1FJEeA", 2015),
			song("All About That Bass #alternative", "z52-0O-hAUE", 2016),
			song("I Gotta Feeling #alternative", "OoJ5jztdouc", 2016),
			song("Teacher #alternative", "ub3hrkysVrE", 2016),
			song("Want To Want Me #alternative", "bsVSO2_Bnsc", 2016),
			song("Hangover (BaBaBa)", "IR7ltJaxOgA", 2016),
			song("Hit The Road Jack", "cCtYbwTKeyk", 2016),
			song("Kool Kontact", "1YAuTN1OQrI", 2016),
			song("Gibberish", "F8kEDkF-aYM", 2016),
			song("When The Rain Begins To Fall", "QnboH6vQw6s", 2016),
			song("You Never Can Tell", "1Ovpl1pksME", 2016),
			song("Animals", "a0xUqX-eQCQ", 2016),
			song("William Tell Overture", "eR6W_2QT6I4", 2016),
			song("You're The One That I Want", "rExjYvnsUXY", 2016),
			song("Shut Up And Dance", "lpfmT3-aIU4", 2016),
			song("DADDY #alternative", "uy9VDt6WMUE", 2017),
			song("Cheap Thrills #alternative", "4XcGPSc48pw", 2017),
			song("Cake By The Ocean #alternative", "wutEWrPtq_Q", 2017),
			song("Hips Don't Lie #alternative", "x7H5v6_SzFo", 2017),
			song("What Is Love #alternative", "ctm0frT4jQY", 2017),
			song("El Tiki", "kSSjOnAyF-o", 2017),
			song("La Bicicleta", "LWU8lc5zvDw", 2017),
			song("Oishii Oishii", "t-tTL6mH7Oo", 2017),
			song("Last Christmas", "AHUgBq_4ZxY", 2017),
			song("Little Swing", "O-CWpgXJ4IY", 2017),
			song("Groove", "ndWA6Wh7rXA", 2017),
			song("Tico-Tico No Fubá", "b0Bd-unGvHE", 2017),
			song("Let Me Love You", "JRmFBocfXCQ", 2017),
			song("RADICAL #alternative", "sHugBkA8_6I", 2017),
			song("Don't Worry", "P5xcqcCiu2o, 2017"),
			song("Juju On That Beat", "T-0WqvyYA14", 2017),
			song("Don't Let Me Down", "2T4fDjwSEPM", 2017),
			song("Chantaje", "l9AGMcoGQOY", 2018),
			song("The Way I Are (Dance With Somebody)", "hfE-6bYped8", 2018),
			song("Rockabye", "kLpJHW-LgMc", 2018),
			song("24K Magic", "V32_h5soVHw", 2018),
			song("Chantaje #fanmade by Redoo", "pFqB4Om1Nsw", 2018),
			song("Wake Me Up Before You Go-Go #emoji", "O9oye-AUVsU", 2017),
			song("Kissing Strangers", "TUigbqDtyaA", 2018)];
			return videos;
}

function getTrioDances() {
	var videos = [song("Jailhouse Rock #alternative", "Z71QWEIybK0", 4),
			song("I Will Survive #onstage", "kjA49TqPdJQ", 2014),
			song("Where Have You Been #onstage", "5E7t-tOzQ6U", 2014),
			song("Gimme! Gimme! Gimme! #onstage", "E7RObkNgRU0", 2014),
			song("I Kissed A Girl #onstage", "GV9sQcLLJfc", 2014),
			song("#thatPower #onstage", "E0R-klm7C9A", 2014),
			song("Don't Worry Be Happy", "f6jfW-3nhEo", 2015),
			song("Dark Horse", "vNb1PXWQHbo", 2015),
			song("The Fox", "Gk6kM-hbliA", 2015),
			song("Epic Sirtaki", "LY42pSdg-sU", 2015),
			song("Bad Romance", "Dd8OqrsDXjM", 2015),
			song("Mahna Mahna", "Y1qs2mhzXII", 2015),
			song("It's My Birthday", "S9qTfvp8YGE", 2015),
			song("Happy #alternative", "AEAZ_TXTIp4", 2015),
			song("Same Old Love", "7Ey_LZDAlTg", 2016),
			song("Born This Way", "AerpamdCtmc", 2016),
			song("Fancy", "rH_btiMulXE", 2016),
			song("Hey Mama", "OGkxJ9046Lk", 2016),
			song("Hey Mama #alternative", "2NG93icW4Ok", 2016),
			song("Boys (Summertime Love)", "lhra6pS_PCQ", 2016),
			song("Let's Groove", "tUFV-K_MzZs", 2016),
			song("Uptown Funk #alternative", "Y6_pvMRqdZI", 2016),
			song("Hit The Road Jack #alternative", "ewU_9Aui7ww", 2016),
			song("Get Ugly", "dnPd2WuD3wc", 2016),
			song("PoPiPo", "GkVcgbvNoK0", 2017),
			song("DADDY", "7ox_vevjVyM", 2017),
			song("September", "J2ps3RmJnGc", 2017),
			song("All About Us", "YVd1n2AGTZc", 2017),
			song("Dragostean Din Tei", "JNydBtviyrI", 2017),
			song("Te Dominar", "zQfqbepN7Gw", 2017),
			song("El Tiki #alternative", "CNX3Ej3j6K8", 2017),
			song("HandClap", "lXvoS3QQLC4", 2017),
			song("Love Ward", "4xTOU8jwAg4", 2018),
			song("Bubble Pop!", "dg-0qgA5UjY", 2018)];
			return videos;
}

function getQuatroDances() {
	var videos = [song("Baby One More Time", "HgU7uRU42hk", 3),
			song("Dynamite", "_RDbGaQ-1qM", 3),
			song("Boogie Wonderland", "tclPEggpgPk", 3),
			song("Spectronizer", "CoK-b0M1E4o", 3),
			song("Night Boat To Cairo", "Drvbq_wY3BE", 3),
			song("I Was Made For Lovin' You", "CpNK7zZPEAw", 3),
			song("This Is Halloween", "Un3BVj-M1b4", 3),
			song("You’re the First, the Last, My Everything", "DBvbCkLd_7Y", 4),
			song("Crucified", "dOP-ICqYOEA", 4),
			song("Jailhouse Rock", "Al1Jfx3RcEA", 4),
			song("Beware Of The Boys", "h7R5IP8sqYI", 4),
			song("Oops!...I Did It Again", "c70Zo8lN8hs", 4),
			song("What Makes You Beautiful", "pvzVBG6PxLs", 4),
			song("Time Warp", "T1MrZ-gFBAE", 4),
			song("Istanbul", "GwVAXCKKjZs", 4),
			song("Wild Wild West", "4jcQkw3hqJQ", 4),
			song("Turn Up The Love #sumo", "AT4aAHmRBWU", 2014),
			song("Pound The Alarm", "B1ha2xLOpJQ", 2014),
			song("Blame It On The Boogie", "bHOjA-V33-0", 2014),
			song("#thatPower", "z30Sd37VyNw", 2014),
			song("Ghostbusters", "DvKf5W-V_8M", 2014),
			song("Prince Ali", "qgpOPdttx9U", 2014),
			song("Kiss You", "PgMx6jr7RjY", 2014),
			song("Y.M.C.A", "YUdZm78P6Hc", 2014),
			song("In The Summertime", "vMtbRGggu_U", 2014),
			song("You're On My Mind", "olv9jsDqsAY", 2014),
			song("She Looks So Perfect", "vPsMxfVQ3t4", 2015),
			song("Bang Bang", "JSFZ1JIbZec", 2015),
			song("Macarena", "3KRthRBkDP0", 2015),
			song("Walk This Way", "pGcFlWMtrhU", 2015),
			song("Tetris", "_jZqwzCCGac", 2015),
			song("4x4", "wOBUSGIC-c8", 2015),
			song("Best Song Ever", "2FlsIHlQAxM", 2015),
			song("Circus", "CsFJAzqZYS0", 2016),
			song("Irish Meadow Dance", "Ix69asaIAIM", 2016),
			song("This Is How We Do", "xm0OnNsEgmE", 2016),
			song("Balkan Blast Remix", "Lhjs_qFxLXs", 2016),
			song("No Control", "-0Xl-N_vknE", 2016),
			song("Copacabana", "GnJItkHsftw", 2016),
			song("Cheerleader", "q7JzxaYcauk", 2016),
			song("Worth It #alternative", "Eh53CLXBsWI", 2017),
			song("Cola Song #alternative", "WpfO3Vxw5mM", 2017),
			song("Scream & Shout", "FHWvZNPIagQ", 2017),
			song("Watch Me", "r7YWe8CCMiY", 2017),
			song("Watch Me #alternative", "L_z4mmN-T3Q", 2017),
			song("Lean On", "pXQ4c6IYiVU", 2017),
			song("Ghost in the Keys", "WfEcjFombg0", 2017)];
			return videos;
}

function getDancesForGame(game){

	var game = game;
	var songs = [];
	var i = 0;
	while (getSoloDances()[i]) {
		if(getSoloDances()[i].game == game){
			songs.push(getSoloDances()[i]);
		}
		i++;
	}

	i = 0;
	while (getDuoDances()[i]) {
		if(getDuoDances()[i].game == game){
			songs.push(getDuoDances()[i]);
		}
		i++;
	}

	i = 0;
	while (getTrioDances()[i]) {
		if(getTrioDances()[i].game == game){
			songs.push(getTrioDances()[i]);
		}
		i++;
	}

	i = 0;
	while (getQuatroDances()[i]) {
		if(getQuatroDances()[i].game == game){
			songs.push(getQuatroDances()[i]);
		}
		i++;
	}

	return songs;

}

function randomVideo(number){

	switch (number) {
		case 0:
			return getSoloDances()[aleatoire(getSoloDances().length)];

		case 1:
			return getDuoDances()[aleatoire(getDuoDances().length)];

		case 2:
			return getTrioDances()[aleatoire(getTrioDances().length)];

		case 3:
			return getQuatroDances()[aleatoire(getQuatroDances().length)];

		default:
			return "55VPB9qnhW8";

	}

}

function randomVideoFromGame(game){
	return getDancesForGame(game)[aleatoire(getDancesForGame(game).length)];
}

function getAllVideos(){
	var intVideos = 0;
	switch (players.length) {
		case 2:
			intVideos = getSoloDances().length+getDuoDances().length;
			break;
		case 3:
			intVideos = getSoloDances().length+getDuoDances().length+getTrioDances().length;
			break;
		default:
			intVideos = getSoloDances().length+getDuoDances().length+getTrioDances().length+getQuatroDances().length;
			break;
	}
	return intVideos;
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

var nextSong;
var nextMode;

function setNextSong(song, mode){

	nextSong = song;
	nextMode = mode;

}

function playVideo(ytid){


	document.getElementById('preview-song').innerHTML = "";
	document.getElementById('dance').innerHTML = "<div id=\"player\"></div>";	
	var player;
    player = new YT.Player('player', {
        height: '470',
        width: '710',
        videoId: ytid,
        events: {
        	'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerReady(event) {
        event.target.playVideo();
    }

      var done = false;
      function onPlayerStateChange(event) {  
        if(event.data == YT.PlayerState.ENDED) {
            if(isset(nextSong)){ 
	        	var sound = new Audio("sounds/transition.mp3");
				sound.play();
				document.getElementById('names').innerHTML = '<b>FREESTYLE</b>!';
				switch(nextMode){
					case 1:
						document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/solo.png">';
						var sound = new Audio("sounds/solo.mp3");
						sound.play();
						break;
					case 2:
						document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/duo.png">';
						var sound = new Audio("sounds/duo.mp3");
						sound.play();
						break;
					case 3:
						document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/trio.png">';
						var sound = new Audio("sounds/trio.mp3");
						sound.play();
						break;
					case 4:
						document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/quatro.png">';
						var sound = new Audio("sounds/quatro.mp3");
						sound.play();
						break;
				}
				document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+nextSong.title+"</b>";
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+nextSong.ytid+"/maxresdefault.jpg\">";
				$("#dance").click(function(){
					playVideo(nextSong.ytid);
				});
				document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+nextSong.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
				$('.collapsible').collapsible('close', 0);
				$('.button-collapse').sideNav('hide');
				nextSong = null;
				nextMode = 0;
            }
        }
      }

      function stopVideo() {
        player.stopVideo();
      }
}

function valid () {

	players = document.getElementById('input-players').value.replace(/ /g, ";").split(";");

	document.getElementById("allnumber").innerHTML = getAllVideos();
	document.getElementById("solonumber").innerHTML = getSoloDances().length;
	document.getElementById("duonumber").innerHTML = getDuoDances().length;
	document.getElementById("trionumber").innerHTML = getTrioDances().length;
	document.getElementById("quatronumber").innerHTML = getQuatroDances().length;

	var allowed = 'false';
	var form = document.getElementById('players-form');
	if(document.getElementById('input-players').value.replace(/ /g, ";").split(";").length < 2){
		$("#players-form").addClass("invalid");
		allowed = 'false';
		$('#error1').modal('open');
	}else{
		$("#players-form").addClass("valid");
		allowed = 'true';
	}

	if(allowed == 'true'){
	document.getElementById('players-form').style.display = "none";
	document.getElementById('final-div').style.display = "flex";

	displayPlayerBox(players);

    if(players.length < 4){
    	document.getElementById("quatro-btn").style.display = "none";
    }else{
    	document.getElementById("quatro-btn").style.display = "flex";
    }
    if(players.length < 3){
    	document.getElementById("trio-btn").style.display = "none";
    }else{
    	document.getElementById("trio-btn").style.display = "flex";
    }

	dance(4);
	}

	// document.getElementById('role').innerHTML += players[toUse];
	
}

function dance(number){
	if(number == 4){
	    if(players.length < 2){
			document.getElementById('players-form').style.display = "flex";
			document.getElementById('final-div').style.display = "none";
			document.getElementById('players-box').style.display = "none";
			$('#error1').modal('open');
	    }else if(players.length == 2){
			number = aleatoire(2);
		}else if(players.length == 3){
			number = aleatoire(3);
		}else if(players.length == 4){
			number = aleatoire(4);
		}else{
			number = aleatoire(4);
		}
	}
	switch (number) {
		case 0:
			
			var sound = new Audio("sounds/solo.mp3");
			sound.play();

			var toUse = aleatoire(players.length);
			document.getElementById('names').innerHTML = '<b>'+players[toUse]+'</b> à toi de danser!';
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/solo.png">';
			var song = randomVideo(0);
			window.document.title = "Solo - "+song.title;
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
				document.getElementById('preview-song').innerHTML = "";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/maxresdefault.jpg\">";
				$("#dance").click(function(){
					playVideo(song.ytid);
				});
				document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
			}	
			break;

		case 1:

			var sound = new Audio("sounds/duo.mp3");
			sound.play();

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			document.getElementById('names').innerHTML = '<b>'+players[toUse]+'</b> et <b>'+players[toUseTwo]+'</b> à vous de danser!';
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/duo.png">';
			window.document.title = "Duo - "+song.title;
			var song = randomVideo(1);document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
				document.getElementById('preview-song').innerHTML = "";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/maxresdefault.jpg\">";
				$("#dance").click(function(){
					playVideo(song.ytid);
				});
				document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
			}	

			break;

		case 2:

			var sound = new Audio("sounds/trio.mp3");
			sound.play();

			var toUse = aleatoire(players.length);
			var toUseTwo = toUse;

			while (toUseTwo == toUse) {
				var toUseTwo = aleatoire(players.length);
			}

			var toUseThree = toUseTwo;

			while ((toUseThree == toUse) |- (toUseThree == toUseTwo)) {
				var toUseThree = aleatoire(players.length);
			}

			document.getElementById('names').innerHTML = '<b>'+players[toUse]+'</b>, '+'<b>'+players[toUseTwo]+'</b> et <b>'+players[toUseThree]+'</b> à vous de danser!';
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/trio.png">';
			var song = randomVideo(2);
			window.document.title = "Trio - "+song.title;
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
				document.getElementById('preview-song').innerHTML = "";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/maxresdefault.jpg\">";
				$("#dance").click(function(){
					playVideo(song.ytid);
				});
				document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
			}

			break;

		case 3:

			var sound = new Audio("sounds/quatro.mp3");
			sound.play();

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

			document.getElementById('names').innerHTML = '<b>'+players[toUse]+'</b>, <b>'+players[toUseTwo]+'</b> et <b>'+players[toUseThree]+'</b> et <b>'+players[toUseFour]+'</b> à vous de danser!';
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/quatro.png">';
			var song = randomVideo(3);
			window.document.title = "Quatro - "+song.title;
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
				document.getElementById('preview-song').innerHTML = "";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/maxresdefault.jpg\">";
				$("#dance").click(function(){
					playVideo(song.ytid);
				});
				document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&start=45&end=55&loop=1&playlist=EAJee50NAU0&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
			}	

			break;

		case 404:


			break;
	}
}

function video(id){
	document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
	document.getElementById('preview-song').innerHTML = "";
	$("#dance").click(function(){});
}

function displayPlayerBox(players) {
	var i = 0;
	var len = players.length;
	var text = "";
	for (; i < len; ) { 
	    text += '<div class="user">'+players[i]+' #'+(i+1)+'<a onclick="removePlayer(\''+players[i].replace(" ", "")+'\');"><i class="red-text text-accent-4 material-icons right">close</i></a></div>';
	    i++;
	}
	text += '<div id="addPlayerBox" class="user green lighten-4"><a class="hover-pointer" onclick="addPlayer();"><i class="green-text text-accent-4 material-icons right">add</i></a><div class="input-field inline"><input placeholder=" " id="addplayer" type="text" class="validate"><label for="addplayer" data-error="wrong" data-success="right">Ajouter un joueur</label></div></div>';
	document.getElementById("player-box").innerHTML = '<div id="players-box" class="chat_box"><div class="chat_head"> Joueurs ('+len+')<i id="players-menu-icon" class="material-icons right">expand_more</i></div><div id="chat-body" class="chat_body" style="height:'+((45*len)+45+10)+'px;"> '+text+'</div></div>';
	Materialize.updateTextFields();
	$('.chat_head').click(function(){
		$('.chat_body').slideToggle('fast');
		if(document.getElementById("players-menu-icon").innerHTML == "expand_more"){
			document.getElementById("players-menu-icon").innerHTML = "expand_less";
		}else{
			document.getElementById("players-menu-icon").innerHTML = "expand_more";
		}
	});
}

function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}

function addPlayer(){

	if(document.getElementById("addplayer").value.split("").length > 0){
		var player = document.getElementById("addplayer").value;
		players += player;
		displayPlayerBox(players);
		document.getElementById("allnumber").innerHTML = getAllVideos();
	}
    if(players.length < 4){
    	document.getElementById("quatro-btn").style.display = "none";
    }else{
    	document.getElementById("quatro-btn").style.display = "flex";
    }
    if(players.length < 3){
    	document.getElementById("trio-btn").style.display = "none";
    }else{
    	document.getElementById("trio-btn").style.display = "flex";
    }
    if(players.length < 2){
		document.getElementById('players-form').style.display = "flex";
		document.getElementById('final-div').style.display = "none";
		document.getElementById('players-box').style.display = "none";
		$('#error1').modal('open');
    }

}

function removePlayer(player) {
	remove(players, player);
    displayPlayerBox(players);
    if(players.length < 4){
    	document.getElementById("quatro-btn").style.display = "none";
    }else{
    	document.getElementById("quatro-btn").style.display = "flex";
    }
    if(players.length < 3){
    	document.getElementById("trio-btn").style.display = "none";
    }else{
    	document.getElementById("trio-btn").style.display = "flex";
    }
    if(players.length < 2){
		document.getElementById('players-form').style.display = "flex";
		document.getElementById('final-div').style.display = "none";
		document.getElementById('players-box').style.display = "none";
		$('#error1').modal('open');
    }
	document.getElementById("allnumber").innerHTML = getAllVideos();
}

function back(){
	document.getElementById('players-form').style.display = "flex";
	document.getElementById('final-div').style.display = "none";
	document.getElementById('players-box').style.display = "none";
	document.getElementById('preview-song').innerHTML = "";
	document.getElementById('dance').innerHTML = "";
}

$(document).ready(function(){
	$('.modal').modal();

  	$('.dropdown-button').dropdown({
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      belowOrigin: true
    }
  	);

  	var randomDanceType = aleatoire(4);
  	var songId = "";
  	switch (randomDanceType) {
  		case 0:
  			songId = getSoloDances()[aleatoire(getSoloDances().length)].ytid;
  			break;
  		case 1:
  			songId = getDuoDances()[aleatoire(getDuoDances().length)].ytid;
  			break;
  		case 2:
  			songId = getTrioDances()[aleatoire(getTrioDances().length)].ytid;
  			break;
  		case 3:
  			songId = getQuatroDances()[aleatoire(getQuatroDances().length)].ytid;
  			break;
  		default:
  			songId = "s0h7ZyLLjbw";
  			break;
  	}
	document.getElementById('preview-song').innerHTML = "<iframe style=\"display:none;\" src=\"https://www.youtube-nocookie.com/embed/"+songId+"?autoplay=1&loop=1&rel=0&amp;showinfo=0\" frameborder=\"0\"></iframe>";
});