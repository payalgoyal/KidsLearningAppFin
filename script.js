function registerEnteredKey(key){
	
	for (var l = 0;l<optionKeys.length;l++){
		var ansSpan = document.getElementById("blank"+l);
		if(ansSpan.innerHTML == "_ "){
			checkPos = l;
			break;
		}
	}
		if (key.innerHTML == optionKeys[checkPos]){
			var bSpan = document.getElementById("blank"+l);
			bSpan.innerHTML = key.innerHTML+" ";
			blankCount--;
			playAudio("correctLetter");
		}
	if (blankCount <= 0){
		var keysEle = document.getElementsByClassName("keys");
		for(var keyEle=0;keyEle<keysEle.length;keyEle++){
			keysEle[keyEle].disabled = true;
			playAudio("correctAnswerComplete");
		}
		
		
		var collectedChoco = document.getElementById('collectedChocolates');
		document.getElementById('collectedChocolates').innerHTML = parseInt(collectedChoco.innerHTML) + 1;
		
		// var queryArea = document.getElementById("play_area");
		// queryArea.setAttribute("style","width:0%")
		var corr = document.createElement("img");
		corr.setAttribute("src","images/correct.png");
		corr.setAttribute("id","correctState");
		corr.setAttribute("style","height:100%");
		
		var gameArea = document.getElementById("ansImage");
		gameArea.appendChild(corr);
		document.getElementById('ansImage').hidden = false;
		
		setTimeout(function(){
			// var ansPara = document.getElementById("ansPara");
			// ansPara.innerHTML = "";
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("ansImage");
			gA.removeChild(cS);
			correctAns();
		}, 1000);
		
	}
}

function registerKey(keyEntered){
	keyEntered.setAttribute("style","transition-timing-function:ease-in;transition:0.1s;transform:translateX(0%) translateY(-25%);");
	setTimeout(function(){
		keyEntered.setAttribute("style","font-size: 2.5em;");
		enteredKey = keyEntered.innerHTML;
		enteredKey = enteredKey.toUpperCase();
		// var ansPara = document.getElementById("ansPara");
		// ansPara.innerHTML = enteredKey;
		// ansPara.setAttribute("style","font-size:5em");
		setTimeout(function(){
			compareAns(queryLetter,enteredKey);
		},300);
		
	},300);
}

var compareAns=function(queryLetter,enteredKey) {
	if (enteredKey == queryLetter){
		playAudio("correctLetter");
		// var queryArea = document.getElementById("play_area");
		// queryArea.setAttribute("style","width:0%")
		
		var collectedChoco = document.getElementById('collectedChocolates');
		document.getElementById('collectedChocolates').innerHTML = parseInt(collectedChoco.innerHTML) + 1;
		playAudio("correctAnswerComplete");
		var corr = document.createElement("img");
		corr.setAttribute("src","images/correct.png");
		corr.setAttribute("id","correctState");
		corr.setAttribute("style","height:100%");
		
		var gameArea = document.getElementById("ansImage");
		gameArea.appendChild(corr);
		document.getElementById('ansImage').hidden = false;
		
		setTimeout(function(){
			// var ansPara = document.getElementById("ansPara");
			// ansPara.innerHTML = "";
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("ansImage");
			gA.removeChild(cS);
			correctAns();
		}, 1000);
		
	}
	else{
		playAudio("wrongAnswerComplete");
		var corr = document.createElement("img");
		corr.setAttribute("src","images/incorrect.png");
		corr.setAttribute("id","correctState");
		corr.setAttribute("style","height:100%");
		
		var gameArea = document.getElementById("ansImage");
		gameArea.appendChild(corr);
		document.getElementById('ansImage').hidden = false;
		
		setTimeout(function(){
			// var ansPara = document.getElementById("ansPara");
			// ansPara.innerHTML = "";
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("ansImage");
			gA.removeChild(cS);
		}, 1000);
	}	
}

function correctAns(){
	var keyBrd = document.getElementById("keyBoard");
	while(keyBrd.firstChild){
		keyBrd.removeChild(keyBrd.firstChild);
	}
	var queryString = new Array();
	var query = window.location.search.split('?')[1];
	var cat = query.split('=')[1];
	
	if (cat == "1"){
			window.document.location.href = "learnAlphabets.html?page=1";
		}
		if (cat == "Test1"){
			window.document.location.href = "alphabetsTest.html";
		}
		if (cat == "9"){
			window.document.location.href = "learnNumbers.html?page=1";
		}
		if (cat == "Test9"){
			numberSpell();
		}
		if (cat == "2"){
			window.document.location.href = "match.html?category=1";
		}
		if (cat == "3"){
			guessIt();
		}
		if (cat == "4"){
			colorRecognise();
		}
		if (cat == "5"){
			counting();
		}
		if (cat == "6"){
			recogniseAnimals();
		}
		if (cat == "7"){
			numberSpell();
		}
		
		if (cat == "8"){
			window.document.location.href = "activityMatch.html?category=7";
		}
}

var my_media;
		 
var playAudio = function(audioID) {
	var audioElement = document.getElementById(audioID);
	var url = audioElement.getAttribute('src');
	
	my_media = new Audio(url,
			// success callback
			 function () { my_media.release(); },
			// error callback
			 function (err) { my_media.release(); }
	);
		   // Play audio
	my_media.play();
}

