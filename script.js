function song(title, ytid){
	var song = {
		title: title,
		ytid: ytid
	}
	return song;
}

window.onload=function(){
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

}

var players = [];

function getSoloDances(){
	var videos = [song("It's Raining Men", "7St0NnVMN4Y"),
			song("Tik Tok", "SmwK07qLqXc"),
			song("I Got You (I Feel Good)", "XOvwo3QxL4s"),
			song("Toxic", "pzpO36EyDA8"),
			song("S.O.S", "GXpxltpRzqY"),
			song("Dagomba", "GRAqn78FkJo"),
			song("Move Your Feet", "ycc6Ge0lVPo"),
			song("Big Girl (You Are Beautiful)", "V7Z-WWl1wak"),
			song("I Want You Back", "06jv6CyGPL0"),
			song("Holiday", "5cVQDqEqiAs"),
			song("Satisfaction", "d_Iq5NuB430"),
			song("Hey Ya!", "x0-26JyMG-A"),
			song("Crazy in Love", "GSXx2qi1aAE"),
			song("Wake Me Up Before You Go-Go", "579u-s96_Fk"),
			song("The Power", "yMXqWITRAh8"),
			song("Monster Mash", "DRj_MUvy6F0"),
			song("Rockafeller Skank", "9-li_iD1coI"),
			song("Funkytown", "Wyr10AwAVfY"),
			song("Jai Ho (You Are My Destiny)", "uLd4e4NiGpo"),
			song("Let's Get It Started", "KodNpcmi9C4"),
			song("Girls Just Want To Have Fun", "iWOatbe3lSQ"),
			song("Ring My Bell", "54Hl7ZX-1GI"),
			song("Cotton Eye Joe", "ZxaGchqDU1s"),
			song("Womanizer", "zxbUOcdHdms"),
			song("Groove Is In The Heart", "9Nw13Ln8ZcU"),
			song("Heart Of Glass", "Els-S7d5moI"),
			song("I Like To Move It", "K4jZmZJB768"),
			song("Hot n Cold", "4iAQcAz__80"),
			song("Fame", "rTXl9xs7t_c"),
			song("Pump Up The Jam", "SD-nGMyU514"),
			song("Le Freak", "EnXrmQi_qAk"),
			song("That's The Way", "UQEyC5yKw0s"),
			song("Eye Of The Tiger", "_QV1xD8Fvf0"),
			song("Can't Get You Out of My Head", "i7BvSl_0mG4"),
			song("Acceptable In The 80s", "_5-K3o-BrRY"),
			song("Who Let The Dogs Out", "lNF1zMV4kL4"),
			song("Wannabe", "FpbkzwgKlf8"),
			song("U Can't Touch This", "2lnYqSQsYAk"),
			song("California Gurls", "PLA1WVW9LFQ"),
			song("Pump It", "usEQHL_ZN8s"),
			song("Lollipop", "zCEWBmG4UIA"),
			song("Price Tag", "jncgXSNEeBM"),
			song("I Don't Feel Like Dancin'", "EFJp4FFWNlU"),
			song("Barbra Streisand", "qj8h8jr7fdM"),
			song("Venus", "4lLb9Phdzj4"),
			song("Teenage Dream", "L7QFG6cyai8"),
			song("Only Girl (In The World)", "Ncc4DFkZ1_w"),
			song("Forget You", "nxydZe7JB0Q"),
			song("Gonna Make You Sweat (Everybody Dance Now)", "-kB6iO25DD0"),
			song("What Are You Waiting For?", "RkZdZ2PJLs8"),
			song("E.T", "gkqWbpdmwB0"),
			song("Boom", "PzVvnvZwnjM"),
			song("Dance All Nite", "t51CfyVYvcw"),
			song("Party Rock Anthem", "03O6A5Uu-Fs"),
			song("She's Got Me Dancing", "Cwbp1VAoEN0"),
			song("Let's Go To The Mall", "C0Fkrp04XnU"),
			song("I'm So Excited", "kZ15tjI3aog"),
			song("Video Killed The Radio Star", "y7yCbhNvQLo"),
			song("Giddy on Up (Giddy on Out)", "tYu4tFJnv3g"),
			song("Airplanes", "a8jOyy5USpE"),
			song("Don't Stop Me Now", "DWm8EwlGFUo"),
			song("Call Me Maybe", "6DvEMAx5T9w"),
			song("Call Me Maybe #alternative", "QUWx7emETI8"),
			song("Good Feeling", "XB9egZbqDDM"),
			song("Disturbia", "ocIYCVk8ANE"),
			song("Hot For Me", "3UeCwiefqmw"),
			song("We No Speak Americano", "005VW7dBrCU"),
			song("Beauty And A Beat", "Qe3fkLGzbKA"),
			song("Crazy Little Thing", "-4hpGvAeSNw"),
			song("On The Floor", "gZrjFbHahf8"),
			song("Never Gonna Give You Up", "wlDyhYiQf0A"),
			song("Maneater", "8YereQepI7A"),
			song("Super Bass", "RLD_PDzzLfI"),
			song("Livin' La Vida Loca", "Yg9y5tIU-c8"),
			song("Oh No!", "QdMl9X0M4Aw"),
			song("Love You Like A Love Song", "x1OJZ_X94W8"),
			song("Make The Party (Don't Stop)", "0pCYi5GJ3Zs"),
			song("Moves Like Jagger", "qJI4Ut3fc7Q"),
			song("So What", "O7jT_EQ355w"),
			song("Mas Que Nada", "M08aNqLhYg4"),
			song("Hit 'Em Up Style (Oops!)", "Y_lcI9F1594"),
			song("Mr. Saxobeat", "f0qp0Jh5_gg"),
			song("Rock n' Roll (Will Take You to the Mountain)", "J9AqL9ddcn0"),
			song("You Make Me Feel", "bhiLSeRq9jI"),
			song("Brand New Start", "VVqiPNFVpLI"),
			song("Good Girl", "Dx9EBRdWcK0"),
			song("Umbrella", "roEKnIhQIB4"),
			song("Umbrella #parapluie", "HasJKZRA5U4"),
			song("Cercavo Amore", "JxihJxf2qPU"),
			song("Diggin' In The Dirt", "pmEDkFReI7U"),
			song("Ain't No Other Man", "K8mXwOQtDno"),
			song("Ain't No Other Man #puppetmaster", "gjXQe7rLp14"),
			song("Domino", "6t_yer7kIFo"),
			song("Want U Back", "TCw7It7hCd0"),
			song("Run The Show #alternative", "yIQ6MdXjfAg"),
			song("Tribal Dance #alternative", "MI5f6W5FNVM"),
			song("What Makes You Beautiful #alternative", "prvu_wJShmo"),
			song("Wild Wild West #alternative", "UoYnq13lD00"),
			song("So Good", "xEIvbxrnIYs"),
			song("Good Feeling #alternative", "uKAuWv3cCqQ"),
			song("Love You Like A Love Song #puppetmaster", "5FZV4Dhu3M0"),
			song("Mr. Saxobeat", "0f4GHiAFMmk"),
			song("Uptown Funk #puppetmaster", "Js07g1TqBFE"),
			song("Teacher #puppetmaster", "9WtAA7oGNQ0"),
			song("All About That Bass #puppetmaster", "mCimOeIhOCM"),
			song("Built For This #puppetmaster", "IUeV1BBIoQA"),
			song("Born This Way #puppetmaster", "Dg5bbyReJBw"),
			song("Holding Out For A Hero #puppetmaster", "4y0k5EyaDys"),
			song("Birthday #puppetmaster", "OfgPiRQeTeQ"),
			song("Summer #puppetmaster", "p9w1POyS-Ls"),
			song("Where Have You Been #puppetmaster", "6oVcGnp56SU"),
			song("Maps #puppetmaster", "Lpx4W7_6UPA"),
			song("Chick Chick", "-rXy99vYG2k"),
			song("Want To Want Me #puppetmaster", "JUw9jBRUZvk"),
			song("Part Of Me", "BL21enjiPFs"),
			song("Funhouse", "sbbeVgzjl74"),
			song("We R Who We R", "RhokF3DoI1o"),
			song("Hit The Lights", "w-M78GBntJI"),
			song("So Glamorous", "f0rPo_EeplY"),
			song("Heavy Cross", "uaqRCZi0VZA"),
			song("Primadonna", "nd6dST5UBOQ"),
			song("The Lazy Song", "ZQrl3VCCw64"),
			song("Gold Dust", "dX5VJBp5VFc"),
			song("Troublemaker", "KCecBUpcTT0"),
			song("Troublemaker #sweat", "saemKtKy0zE"),
			song("Feel So Right", "FGewP7DWCtc"),
			song("Fine China", "BQLcgWSnNdM"),
			song("Fine China #alternative", "c36e6K80LSY"),
			song("Applause", "0fi0nIQcU80"),
			song("Applause #alternative", "P_5ZUcR0S8g"),
			song("I Will Survive", "_wnO9LJzeWg"),
			song("Love Boat", "pgAeY3I8p5M"),
			song("Flashdance... What A Feeling", "DHpa-vg3Ox0"),
			song("Flashdance... What A Feeling #puppetmaster", "Qo4p1zD09pc"),
			song("She Wolf", "nLfyBo-XjlM"),
			song("Just Dance", "sKfmeCTJiEs"),
			song("Just Dance #sweat", "g0QnV5x8j6U"),
			song("Wild", "HR6ZFPHYd4c"),
			song("Gentleman", "OjJ228jwLgs"),
			song("Gentleman #sweat", "sdwO4aWLtJE"),
			song("Where Have You Been", "ScT1Ytl8wkc"),
			song("Gimme! Gimme! Gimme!", "PJ0HinsiPo4"),
			song("Maria", "ocuW-yMY-G0"),
			song("Starships", "hKAokFDcwGY"),
			song("Feel This Moment", "yNZUBww-vHQ"),
			song("Follow The Leader", "tuzy0Dk-u_M"),
			song("Rich Girl ", "1c3tDplNmG0"),
			song("Rich Girl #chaise", "hr5k1RvOjnw"),
			song("I Kissed A Girl", "0pWsPD1gv1I"),
			song("I Kissed A Girl #sweat", "0x-cN298mkY"),
			song("It's You", "wAzutB2i_mI"),
			song("It's You #sweat", "Unxsk_-uNdE"),
			song("Miss Understood", "WNQCPVE-Y9E"),
			song("The Other Side", "MlQv_QEbufk"),
			song("Dançando", "z8c7jQ7HeAs"),
			song("Danse", "MDL0zZydn2Q"),
			song("Alfonso Signorini (eroe nazionale)", "KnOnK4bg2LY"),
			song("Safe And Sound", "L5Ivqz9GFPk"),
			song("Waking Up In Vegas", "IB8PECW8oDo"),
			song("Blurred Lines #alternative", "spQhD1yQ9rc"),
			song("Turn Up The Love #fanmade", "_cNI7OvwrZI"),
			song("Pound The Alarm #alternative", "6Ebf77b0DSU"),
			song("#thatPower #alternative", "q_eMEF3xSzk"),
			song("Ghostbusters #sweat", "fPLIdiMG05I"),
			song("We Can't Stop", "RB5H9MEHd4w"),
			song("Man Down", "ckXPnu94ODQ"),
			song("Roar", "C3PAHgreSJo"),
			song("Wake Me Up", "J-GUzoOZAZU"),
			song("Can't Hold Us", "Kw0Aj6TKptE"),
			song("What About Love", "ssStbtrYOfE"),
			song("One Way Or Another", "3_jfgXK1oR0"),
			song("Sexy And I Know It", "IJ9xReLqIRk"),
			song("American Girl", "8NrK-59xWDI"),
			song("My Main Girl", "wBqHoBWbngk"),
			song("I Need Your Love", "Evuj9KlS1wM"),
			song("Can't Get Enough", "dD8Me7iN1bA"),
			song("Don't You Worry Child", "jGR2N10onpw"),
			song("Rock n Roll", "wh1ftlu4N4U"),
			song("The World Is Ours", "U4S4HlvBIzw"),
			song("It's My Birthday #alternative", "wXERSWv_8pk"),
			song("Happy", "D8lA2nJ2yRs"),
			song("Love Me Again", "jx49TtH72lA"),
			song("Till I Found You", "cj_bvMhv-sg"),
			song("Never Can Say Goodbye", "mJxCKoxWNuA"),
			song("Birthday", "otWeDrOWq08"),
			song("Mouvement Is Happiness", "ijJa_nmgvv0"),
			song("Build For This", "BTC30b3I_zw"),
			song("Holding Out For A Hero", "vm7ll0cRfVo"),
			song("Diamonds", "mnazyRWMELs"),
			song("Maps", "tBqMQbxe68k"),
			song("You Spin Me Round", "KeGzrBcaluM"),
			song("I Love It", "s0kwXIlaOGc"),
			song("Problem", "5q7-XRYQRw8"),
			song("Burn", "T5eneYpa0Tw"),
			song("Addicted To You", "HbslypioNsA"),
			song("Summer", "KRGDT-5JLlA"),
			song("Summer #sweat", "DM0ri4TsCS0"),
			song("Black Window", "MSBLUVpsez0"),
			song("Let It Go #alternative", "uu6r-qg3LMg"),
			song("Papaoutai #alternative", "EBxrh6bKJPA"),
			song("Walk This Way #alternative", "R3DI4cLxHHM"),
			song("Break Free", "Scflq-tjL-c"),
			song("I Luh Ya Papi", "KygODsjJRFY"),
			song("Boom Clap", "zOtrSXyVRUk"),
			song("Kiss Kiss", "fUVtMZ9XWPQ"),
			song("All About That Bass", "JTmb5Kp3gqY"),
			song("Born This Way #alternative", "lV_ztTAyFII"),
			song("Under The Sea", "ocJs9SAKRGI"),
			song("Stadium Flow", "Q-pUPS8f274"),
			song("Heartbeat Song", "d096g28-Fhw"),
			song("Ievan Polkka", "SzMZlOsj_ok"),
			song("Drop The Mambo", "OSovq81i_e0"),
			song("These Boots Are Made For Walking", "IqPcjgm0nQo"),
			song("Lights", "0JwKh023V4I"),
			song("Chiwawa", "PBtHXNDlg6g"),
			song("Chiwawa #alternative", "NZJ2mr0gWlY"),
			song("I Gotta Feeling", "L446CMoGDCY"),
			song("The Choice Is Yours", "yCY7j3sgbUo"),
			song("Cool For The Summer", "bibdDPuo0MM"),
			song("Stuck On A Feeling", "hEggA05LfFk"),
			song("Teacher", "RC4zQ5Y4qlg"),
			song("I'm An Albatraoz", "hsqi_qRpwp0"),
			song("Want To Want Me", "2zwtD32rVr0"),
			song("Rabiosa", "9MQ7KkEgeLc"),
			song("Rabiosa #sweat", "bt3EiweB_fQ"),
			song("Blame", "CLWFBQph3c8"),
			song("Uptown Funk", "McWNUoF_WG4"),
			song("Smile", "XybeONda5bY"),
			song("Kaboom Pow", "Qpf3uO8abtg"),
			song("Fun", "HHYALgIxwtc"),
			song("Circus #alternative", "KYmIau0afIw"),
			song("This Is How We Do #alternative", "KSmo508oLLY"),
			song("Better When I'm Dancin'", "pjYGiH5CEY8"),
			song("Taste The Feeling", "hWVHr4sswTU"),
			song("Taste The Feeling #alternative", "gBMLKnsUN50"),
			song("Am I Wrong", "Sdr06SxWUtY"),
			song("Hold My Hand", "fPA-cIJuXws"),
			song("Stadium Flow #fanmade", "kQWWMMgJX2A"),
			song("This Is How We Do #fanmade", "OWm5oMVHWVE"),
			song("September #alternative", "8O8IkyTPlDw"),
			song("Bang", "nf6DrPeIjrI"),
			song("Cheap Thrills", "wfEjnQVOb3o"),
			song("Sorry", "nb10K7afRNY"),
			song("Sorry #alternative", "lqzpVvwocic"),
			song("I Love Rock 'N' Roll", "CkdAPoDa76Y"),
			song("Wherever I Go", "CZBSBuTr9qk"),
			song("RADICAL", "fPuwridEkng"),
			song("Like I Would", "zL1rCTC9NE4"),
			song("Into You", "syPcs90Gy80"),
			song("Don't Wanna Know", "W2rHAKMX66E"),
			song("Carnival Boom", "lmJrK7KmErQ"),
			song("Bonbon", "ONcF2ca1LRs"),
			song("Worth It", "744ga2QpahQ"),
			song("Cola Song", "Cv7M-KYi6l0"),
			song("Cake By The Ocean", "oRY_wV7nQ78"),
			song("Single Ladies", "-f-AmesaWYs"),
			song("Don't Stop Me Now", "6JuUTaMmZ5Q"),
			song("Don't Stop Me Now #alternative", "cdZ0VJdWvQQ"),
			song("Can't Feel My Face", "LkG1X3cRFkw"),
			song("Hips Don't Lie", "V0jcc1TgFJM"),
			song("Titanium", "ZFGidhb-lPU"),
			song("What Is Love", "I3KR7ddwx1U"),
			song("Run The Night", "b8T1tX7TSnA"),
			song("Bailar", "kXBUY0SCNp0"),
			song("Oishii Oishii #fanmade", "kGsv2DWQ9rE"),
			song("Lean On #alternative", "iC8r1ofSIkk"),
			song("YOUTH", "PnTL7I8tLoc"),
			song("Imya 505", "KZplK-kQDzI"),
			song("Je sais pas danser", "pfvMecHT7bI"),
			song("The Greatest", "ak3Zs43Fv4c"),
			song("Me Too", "BieKXHnpieE"),
			song("How Deep Is Your Love", "QoYOWKkXsck"),
			song("Ain't My Fault", "JdEzwBjyI9w"),
			song("Automaton", "aBr5rrZyiDc"),
			song("Side To Side", "Arum969G1xQ"),
			song("Naughty Girl", "VtXlqRZd7Zs"),
			song("Make It Jingle", "dPX_8E5CZzM"),
			song("Daddy Cool", "auHxII_wUcI"),
			song("Millionaire #fanmade", "HGiE1yTC_2o"),
			song("This Is What You Came For #fanmade", "n4xRbQseUjY"),
			song("Paris #fanmade", "mORHPuU8AVQ"),
			song("Rockabye #fanmade", "uAPQjN0zDnk"),
			song("Shape Of You #fanmade", "zAgUrkk-srI"),
			song("Chained To The Rhythm #fanmade", "5Xchmyv5WFQ"),
			song("Love Myself #fanmade", "pLmCJ3cCw3Q"),
			song("Talk Dirty #fanmade", "H9D_A7cPhog"),
			song("Chantaje #fanmade", "xmzyDsgwWCY"),
			song("South Beach Stars #fanmade", "kYZWIbwVO2k"),
			song("Somewhere To Run #fanmade", "vhTt-KV5ef0"),
			song("Ain't My Fault #fanmade", "GxLhpJfLRJI")];
			return videos;
}

function getDuoDances() {
	var videos = [song("A-Punk", "bcTy2MaKvg4"),
			song("Girlfriend", "rkNHlJSGcv4"),
			song("Hot Stuff", "C7fYcYlOklk"),
			song("Katti Kalandal", "aUwk_02S1Ww"),
			song("Sway", "EnQwOsnFw5I"),
			song("Soul Bossa Nova", "Nne8qM6shQo"),
			song("Jump In The Line", "FL58fasm6wY"),
			song("Jump", "H8mxgMuTrz4"),
			song("Alright", "85mNIDXEN4s"),
			song("Promiscuous", "KFA_jdR_ivI"),
			song("No Limit", "ihw5NPCW2Lg"),
			song("Jump (For My Love)", "wqiuKlcNGsU"),
			song("Da Funk", "QsMk9m2QScM"),
			song("Beautiful Liar", "eMvnMMeZiRA"),
			song("Somethin' Stupid", "ROefbOm4rjs"),
			song("Jambo Mambo", "G-8Juj8Qy6U"),
			song("Hungarian Dance No. 5", "tbjlTgo-bnA"),
			song("Mamasita", "5nZqG794Zag"),
			song("Jamaican Dance", "2iRBqj54QZU"),
			song("Rock Lobster", "dKmpFmSzX6Q"),
			song("Aserejé", "InL70jgnc0w"),
			song("Can’t Take My Eyes Off You", "ktVG5CFRcTQ"),
			song("The Final Countdown", "oBk1i7SLLWo"),
			song("(I've Had) The Time Of My Life", "wxEIXUCzj6I"),
			song("I Like It", "5Vlpv4-V9j0"),
			song("Run The Show", "uoFVc3WFAAM"),
			song("Tribal Dance", "0hZcNcWARFE"),
			song("Gangnam Style", "9r5b52AkSvI"),
			song("One Thing", "tQyiAsQ6m4c"),
			song("Oath", "erEh5G5HG_U"),
			song("Die Young", "fXxTgyEQz7Y"),
			song("Starships #alternative", "qJr-xpBIWVs"),
			song("Nitro Bot", "w-xxrt_Zz6Y"),
			song("99 Luftballons", "nWMATeA-Pwg"),
			song("Candy", "9Mz48fXx8uc"),
			song("Limbo", "wPDp_UQfdec"),
			song("Just A Gigolo", "0dqFJLJ8jZk"),
			song("Blurred Lines", "x1-o62z2_q8"),
			song("Blurred Lines #fanmade", "nFwauUJY064"),
			song("Could You Be Loved", "OfN-16IYNvE"),
			song("Turn Up The Love", "9l7IuYJ6xCY"),
			song("Get Lucky", "nPCyN7BqIm4"),
			song("Careless Whisper", "1AXyVDB5PkI"),
			song("C'mon", "OMXSGsfxRxA"),
			song("The Way", "N6jL1NvrsH0"),
			song("Timber", "5mgcXDQ8E2Y"),
			song("The Fox #alternative", "gUufRyeixVA"),
			song("Diamonds #alternative", "7ROmejncxjQ"),
			song("I Love It #alternative", "fYjFuWroCUs"),
			song("Let It Go", "ZspUn6Ugcdk"),
			song("Only You (And You Alone)", "f_KmFFl7hVY"),
			song("Xmas Tree", "6YLKPZU4fqI"),
			song("Me And My Broken Heart", "6b6OZDJsGpE"),
			song("Love Is All", "2K_3wbo9ptc"),
			song("Ain't No Moutain High Enough", "9xKUT980O2g"),
			song("Bailando", "1TpXup5KvAA"),
			song("Get Low", "GwXOBL4-X4Q"),
			song("Papaoutai", "M0viCdSYpPM"),
			song("Speedy Gonzales", "8cWHj1FJEeA"),
			song("All About That Bass #alternative", "z52-0O-hAUE"),
			song("I Gotta Feeling #alternative", "OoJ5jztdouc"),
			song("Teacher #alternative", "ub3hrkysVrE"),
			song("Want To Want Me #alternative", "bsVSO2_Bnsc"),
			song("Hangover (BaBaBa)", "IR7ltJaxOgA"),
			song("Hit The Road Jack", "cCtYbwTKeyk"),
			song("Kool Kontact", "1YAuTN1OQrI"),
			song("Gibberish", "F8kEDkF-aYM"),
			song("When The Rain Begins To Fall", "QnboH6vQw6s"),
			song("You Never Can Tell", "1Ovpl1pksME"),
			song("Animals", "a0xUqX-eQCQ"),
			song("William Tell Overture", "eR6W_2QT6I4"),
			song("You're The One That I Want", "rExjYvnsUXY"),
			song("Shut Up And Dance", "lpfmT3-aIU4"),
			song("DADDY #alternative", "uy9VDt6WMUE"),
			song("Cheap Thrills #alternative", "4XcGPSc48pw"),
			song("Cake By The Ocean #alternative", "wutEWrPtq_Q"),
			song("Hips Don't Lie #alternative", "x7H5v6_SzFo"),
			song("What Is Love #alternative", "ctm0frT4jQY"),
			song("El Tiki", "kSSjOnAyF-o"),
			song("La Bicicleta", "LWU8lc5zvDw"),
			song("Oishii Oishii", "t-tTL6mH7Oo"),
			song("Last Christmas", "AHUgBq_4ZxY"),
			song("Little Swing", "O-CWpgXJ4IY"),
			song("Groove", "ndWA6Wh7rXA"),
			song("Tico-Tico No Fubá", "b0Bd-unGvHE"),
			song("Let Me Love You", "JRmFBocfXCQ"),
			song("RADICAL #alternative", "sHugBkA8_6I"),
			song("Don't Worry", "P5xcqcCiu2o"),
			song("Juju On That Beat", "T-0WqvyYA14"),
			song("Don't Let Me Down", "2T4fDjwSEPM"),
			song("Chantaje", "l9AGMcoGQOY"),
			song("The Way I Are (Dance With Somebody)", "hfE-6bYped8"),
			song("Rockabye", "kLpJHW-LgMc"),
			song("24K Magic", "V32_h5soVHw"),
			song("Chantaje #fanmade", "pFqB4Om1Nsw")];
			return videos;
}

function getTrioDances() {
	var videos = [song("Jailhouse Rock #alternative", "Z71QWEIybK0"),
			song("I Will Survive #onstage", "kjA49TqPdJQ"),
			song("Where Have You Been #onstage", "5E7t-tOzQ6U"),
			song("Gimme! Gimme! Gimme! #onstage", "E7RObkNgRU0"),
			song("I Kissed A Girl #onstage", "GV9sQcLLJfc"),
			song("#thatPower #onstage", "E0R-klm7C9A"),
			song("Don't Worry Be Happy", "f6jfW-3nhEo"),
			song("Dark Horse", "vNb1PXWQHbo"),
			song("The Fox", "Gk6kM-hbliA"),
			song("Epic Sirtaki", "LY42pSdg-sU"),
			song("Bad Romance", "Dd8OqrsDXjM"),
			song("Mahna Mahna", "Y1qs2mhzXII"),
			song("It's My Birthday", "S9qTfvp8YGE"),
			song("Happy #alternative", "AEAZ_TXTIp4"),
			song("Same Old Love", "7Ey_LZDAlTg"),
			song("Born This Way", "AerpamdCtmc"),
			song("Fancy", "rH_btiMulXE"),
			song("Hey Mama", "OGkxJ9046Lk"),
			song("Hey Mama #alternative", "2NG93icW4Ok"),
			song("Boys (Summertime Love)", "lhra6pS_PCQ"),
			song("Let's Groove", "tUFV-K_MzZs"),
			song("Uptown Funk #alternative", "Y6_pvMRqdZI"),
			song("Hit The Road Jack #alternative", "ewU_9Aui7ww"),
			song("Get Ugly", "dnPd2WuD3wc"),
			song("PoPiPo", "GkVcgbvNoK0"),
			song("DADDY", "7ox_vevjVyM"),
			song("September", "J2ps3RmJnGc"),
			song("All About Us", "YVd1n2AGTZc"),
			song("Dragostean Din Tei", "JNydBtviyrI"),
			song("Te Dominar", "zQfqbepN7Gw"),
			song("El Tiki #alternative", "CNX3Ej3j6K8"),
			song("HandClap", "lXvoS3QQLC4"),
			song("Love Ward", "4xTOU8jwAg4"),
			song("Bubble Pop!", "dg-0qgA5UjY")];
			return videos;
}

function getQuatroDances() {
	var videos = [song("", ""),
			song("Baby One More Time", "HgU7uRU42hk"),
			song("Dynamite", "_RDbGaQ-1qM"),
			song("Boogie Wonderland", "tclPEggpgPk"),
			song("Spectronizer", "CoK-b0M1E4o"),
			song("Night Boat To Cairo", "Drvbq_wY3BE"),
			song("I Was Made For Lovin' You", "CpNK7zZPEAw"),
			song("This Is Halloween", "Un3BVj-M1b4"),
			song("You’re the First, the Last, My Everything", "DBvbCkLd_7Y"),
			song("Crucified", "dOP-ICqYOEA"),
			song("Jailhouse Rock", "Al1Jfx3RcEA"),
			song("Beware Of The Boys", "h7R5IP8sqYI"),
			song("Oops!...I Did It Again", "c70Zo8lN8hs"),
			song("What Makes You Beautiful", "pvzVBG6PxLs"),
			song("Time Warp", "T1MrZ-gFBAE"),
			song("Istanbul", "GwVAXCKKjZs"),
			song("Wild Wild West", "4jcQkw3hqJQ"),
			song("Turn Up The Love #sumo", "AT4aAHmRBWU"),
			song("Pound The Alarm", "B1ha2xLOpJQ"),
			song("Blame It On The Boogie", "bHOjA-V33-0"),
			song("#thatPower", "z30Sd37VyNw"),
			song("Ghostbusters", "DvKf5W-V_8M"),
			song("Prince Ali", "qgpOPdttx9U"),
			song("Kiss You", "PgMx6jr7RjY"),
			song("Y.M.C.A", "YUdZm78P6Hc"),
			song("In The Summertime", "vMtbRGggu_U"),
			song("You're On My Mind", "olv9jsDqsAY"),
			song("She Looks So Perfect", "vPsMxfVQ3t4"),
			song("Bang Bang", "JSFZ1JIbZec"),
			song("Macarena", "3KRthRBkDP0"),
			song("Walk This Way", "pGcFlWMtrhU"),
			song("Tetris", "_jZqwzCCGac"),
			song("4x4", "wOBUSGIC-c8"),
			song("Best Song Ever", "2FlsIHlQAxM"),
			song("Circus", "CsFJAzqZYS0"),
			song("Irish Meadow Dance", "Ix69asaIAIM"),
			song("This Is How We Do", "xm0OnNsEgmE"),
			song("Balkan Blast Remix", "Lhjs_qFxLXs"),
			song("No Control", "-0Xl-N_vknE"),
			song("Copacabana", "GnJItkHsftw"),
			song("Cheerleader", "q7JzxaYcauk"),
			song("Worth It #alternative", "Eh53CLXBsWI"),
			song("Cola Song #alternative", "WpfO3Vxw5mM"),
			song("Scream & Shout", "FHWvZNPIagQ"),
			song("Watch Me", "r7YWe8CCMiY"),
			song("Watch Me #alternative", "L_z4mmN-T3Q"),
			song("Lean On", "pXQ4c6IYiVU"),
			song("Ghost in the Keys", "WfEcjFombg0")];
			return videos;
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

function getAllVideos(){
	return getSoloDances().length+getDuoDances().length+getTrioDances().length+getQuatroDances().length;
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

	players = document.getElementById('input-players').value.replace(/ /g, ";").split(";");
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
		number = aleatoire(4);
	}
	switch (number) {
		case 0:
			
			var sound = new Audio("sounds/solo.mp3");
			sound.play();

			var toUse = aleatoire(players.length);
			document.getElementById('names').innerHTML = '<b>'+players[toUse]+'</b> à toi de danser!';
			document.getElementById('icon').innerHTML = '<img style="height= 50px;" src="img/solo.png">';
			var song = randomVideo(0);
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/hqdefault.jpg\">";
				$("#dance").click(function(){
					video(song.ytid);
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
			var song = randomVideo(1);document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/hqdefault.jpg\">";
				$("#dance").click(function(){
					video(song.ytid);
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
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/hqdefault.jpg\">";
				$("#dance").click(function(){
					video(song.ytid);
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
			document.getElementById('song').innerHTML = "<i style=\"font-size: 40px;\" class=\"material-icons\">music_note</i> Chorée sélectionée: <b>"+song.title+"</b>";
			if(document.getElementById('autoplay').checked){
				document.getElementById('dance').innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/"+song.ytid+"?autoplay=1&rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
			}else{
				document.getElementById('dance').innerHTML = "<img class=\"hover-pointer\" src=\"https://img.youtube.com/vi/"+song.ytid+"/hqdefault.jpg\">";
				$("#dance").click(function(){
					video(song.ytid);
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
	text += '<div class="user green lighten-4"><a class="hover-pointer" onclick="addPlayer();"><i class="green-text text-accent-4 material-icons right">add</i></a><div class="input-field inline"><input placeholder=" " id="addplayer" type="text" class="validate"><label for="addplayer" data-error="wrong" data-success="right">Ajouter un joueur</label></div></div>';
	document.getElementById("player-box").innerHTML = '<div id="players-box" class="chat_box"><div class="chat_head"> Joueurs ('+len+')<i id="players-menu-icon" class="material-icons right">expand_more</i></div><div class="chat_body" style="height:'+((45*len)+45+10)+'px;"> '+text+'</div></div>';
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
		players.push(player);
		displayPlayerBox(players);
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