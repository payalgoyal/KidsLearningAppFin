var list = [];
var optionKeys;
var blankCount;
function numberSpell(page){
	document.getElementById("wrapper").setAttribute("style","background-image: url('images/numbers.png');background-size:cover");
	document.getElementById("header").innerHTML = "<img src='images/numberSpellHeader.png' style='margin-top:-5%' />";
	list.push({key: 1,
		optionValue: "ONE"});
		
	list.push({key: 2,
		optionValue: "TWO"});
	
	list.push({key: 3,
		optionValue: "THREE"});
	
	list.push({key: 4,
		optionValue: "FOUR"});
		
	list.push({key: 5,
		optionValue: "FIVE"});
		
	list.push({key: 6,
		optionValue: "SIX"});
		
	list.push({key: 7,
		optionValue: "SEVEN"});
		
	list.push({key: 8,
		optionValue: "EIGHT"});
		
	list.push({key: 9,
		optionValue: "NINE"});
		
	list.push({key: 10,
		optionValue: "TEN"});
		
	list.push({key: 11,
		optionValue: "ELEVEN"});
		
	list.push({key: 12,
		optionValue: "TWELVE"});
	
	list.push({key: 13,
		optionValue: "THIRTEEN"});
	
	list.push({key: 14,
		optionValue: "FOURTEEN"});
		
	list.push({key: 15,
		optionValue: "FIFTEEN"});
		
	list.push({key: 16,
		optionValue: "SIXTEEN"});
		
	list.push({key: 17,
		optionValue: "SEVENTEEN"});
		
	list.push({key: 18,
		optionValue: "EIGHTEEN"});
		
	list.push({key: 19,
		optionValue: "NINETEEN"});
		
	list.push({key: 20,
		optionValue: "TWENTY"});
		
	list.push({key: 21,
		optionValue: "TWENTY ONE"});
		
	list.push({key: 22,
		optionValue: "TWENTY TWO"});
	
	list.push({key: 23,
		optionValue: "TWENTY THREE"});
	
	list.push({key: 24,
		optionValue: "TWENTY FOUR"});
		
	list.push({key: 25,
		optionValue: "TWENTY FIVE"});
		
	list.push({key: 26,
		optionValue: "TWENTY SIX"});
		
	list.push({key: 27,
		optionValue: "TWENTY SEVEN"});
		
	list.push({key: 28,
		optionValue: "TWENTY EIGHT"});
		
	list.push({key: 29,
		optionValue: "TWENTY NINE"});
		
	list.push({key: 30,
		optionValue: "THIRTY"});
		
	list.push({key: 31,
		optionValue: "THIRTY ONE"});
		
	list.push({key: 32,
		optionValue: "THIRTY TWO"});
	
	list.push({key: 33,
		optionValue: "THIRTY THREE"});
	
	list.push({key: 34,
		optionValue: "THIRTY FOUR"});
		
	list.push({key: 35,
		optionValue: "THIRTY FIVE"});
		
	list.push({key: 36,
		optionValue: "THIRTY SIX"});
		
	list.push({key: 37,
		optionValue: "THIRTY SEVEN"});
		
	list.push({key: 38,
		optionValue: "THIRTY EIGHT"});
		
	list.push({key: 39,
		optionValue: "THIRTY NINE"});
		
	list.push({key: 40,
		optionValue: "FORTY"});
	
	list.push({key: 41,
		optionValue: "FORTY ONE"});
		
	list.push({key: 42,
		optionValue: "FORTY TWO"});
	
	list.push({key: 43,
		optionValue: "FORTY THREE"});
	
	list.push({key: 44,
		optionValue: "FORTY FOUR"});
		
	list.push({key: 45,
		optionValue: "FORTY FIVE"});
		
	list.push({key: 46,
		optionValue: "FORTY SIX"});
		
	list.push({key: 47,
		optionValue: "FORTY SEVEN"});
		
	list.push({key: 48,
		optionValue: "FORTY EIGHT"});
		
	list.push({key: 49,
		optionValue: "FORTY NINE"});
		
	list.push({key: 50,
		optionValue: "FIFTY"});
		
	list.push({key: 60,
		optionValue: "SIXTY"});
		
	list.push({key: 70,
		optionValue: "SEVENTY"});
		
	list.push({key: 80,
		optionValue: "EIGHTY"});
		
	list.push({key: 90,
		optionValue: "NINETY"});
		
	list.push({key: 100,
		optionValue: "HUNDRED"});
	
	ran = Math.floor(Math.random() * list.length);
	
	queryLetter = list[ran].key;
	
	var queryArea = document.getElementById("play_area");
	queryArea.setAttribute("style","font-weight:500;font-size: 2.5em;");
	queryArea.innerHTML = queryLetter;
	
	optionKeys = list[ran].optionValue;
	
	var gameArea = document.getElementById("game_area");
	
	ansLength = optionKeys.length;
	blankCount = 0;
	for(var i=0;i<optionKeys.length;i++){
		if(optionKeys[i] != ' '){
			blankCount = blankCount+1;
		}
	}
	var blankSpanAnswered = document.getElementsByClassName("blank");
	while(blankSpanAnswered[0]){
		blankSpanAnswered[0].parentNode.removeChild(blankSpanAnswered[0]);
	}
	
	for (var i =0;i<ansLength;i++){
		var ansSpan = document.createElement("span");
				ansSpan.setAttribute("class","blank");
				ansSpan.setAttribute("id","blank"+i);
				ansSpan.setAttribute("style","font-weight:500;font-size: 2.5em;");
				if(list[ran].optionValue[i] != ' '){
					ansSpan.innerHTML = "_ ";
				}
				else{
					ansSpan.innerHTML = "/";
				}
				
				var queryAreaElem = document.getElementById("game_area");
				queryAreaElem.appendChild(ansSpan);
	}
	
	var ansDiv = document.createElement("div");
	ansDiv.setAttribute("id","ansDiv");
	// ansDiv.setAttribute("style","width:30%;height:100%;background-color:green;float:right");
	gameArea.appendChild(ansDiv);
	
	var ansPara = document.createElement("p");
	ansPara.setAttribute("id","ansPara");
	
	ansDiv.appendChild(ansPara);
	
	for (keys = 65; keys <= 90; keys++){
			var key = document.createElement("button");
			key.setAttribute("type","button");
			key.setAttribute("value","&#"+keys);
			key.setAttribute("class","keys");
			key.setAttribute("onclick","registerEnteredKey(this)");
			key.innerHTML = String.fromCharCode(keys);
			
			var keyBrd = document.getElementById("keyBoard");
			keyBoard.appendChild(key);
		}
		// for (keys = 48; keys <= 57; keys++){
			// var key = document.createElement("button");
			// key.setAttribute("type","button");
			// key.setAttribute("value","&#"+keys);
			// key.setAttribute("class","keys");
			// key.setAttribute("onclick","registerEnteredKey(this)");
			// key.innerHTML = String.fromCharCode(keys);
			
			// var keyBrd = document.getElementById("keyBoard");
			// keyBrd.appendChild(key);
		// }
		
	// document.getElementById("footer").setAttribute("style","width:50%;margin-left:25%;margin-right:25%");
	// var pAgain = document.getElementById('play_again');
		// pAgain.setAttribute("style","visibility:hidden");
}
