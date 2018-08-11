var list = [];
var optionKeys;
var blankCount;
var ran;
function alphabetTest(){
	list.push({key: "A/aeroplane.png",
		optionValue: ['A','P','L','E','H'],
		answer: "A"});
		
	list.push({key: "A/apple.png",
		optionValue: ['A','P','L','E','H'],
		answer: "A"});
	
	list.push({key: "B/butterfly.png",
		optionValue: ['B','P','A','E','S'],
		answer: "B"});
	
	list.push({key: "B/ball.png",
		optionValue: ['B','P','A','E','S'],
		answer: "B"});
		
	list.push({key: "B/banana.png",
		optionValue: ['B','P','A','E','S'],
		answer: "B"});
		
	list.push({key: "Z/zebra.jpg",
		optionValue: ['Z','P','A','E','S'],
		answer: "Z"});
		
	list.push({key: "Z/zipper.png",
		optionValue: ['B','P','Z','E','S'],
		answer: "Z"});
	
	list.push({key: "M/monkey.jpg",
		optionValue: ['Z','P','A','M','S'],
		answer: "M"});
		
	list.push({key: "M/mango.png",
		optionValue: ['B','P','M','E','S'],
		answer: "M"});
		
	list.push({key: "O/owl.jpg",
		optionValue: ['Z','P','A','M','O'],
		answer: "O"});
		
	list.push({key: "O/octopus.jpg",
		optionValue: ['B','P','M','O','S'],
		answer: "O"});
		
	list.push({key: "I/igloo.jpg",
		optionValue: ['Z','I','A','M','S'],
		answer: "I"});
		
	list.push({key: "L/lion.jpg",
		optionValue: ['B','P','L','E','S'],
		answer: "L"});
	
	list.push({key: "D/dog.png",
		optionValue: ['B','D','L','E','S'],
		answer: "D"});
		

	ran = Math.floor(Math.random() * list.length);
	
	var imag = "<img src='images/alphabetsImages/" + list[ran].key + "'/>";
	document.getElementById('alphaImage').innerHTML = imag;
	
	for (var keys=0;keys<list[ran].optionValue.length;keys++){
		var key = document.createElement("button");
		key.setAttribute("type","button");
		key.setAttribute("value",list[ran].optionValue[keys]);
		key.setAttribute("class","keys");
		key.setAttribute("onclick","checkAns(this)");
		key.innerHTML = list[ran].optionValue[keys];
		
		var keyBrd = document.getElementById("keyBoard");
		keyBrd.appendChild(key);
		
		keyBrd.setAttribute("style","text-align:center");			
	}
	
}

function checkAns(key){
	if (key.innerHTML == list[ran].answer){
		
		var collectedChoco = document.getElementById('collectedChocolates');
		document.getElementById('collectedChocolates').innerHTML = parseInt(collectedChoco.innerHTML) + 1;
		playAudio("correctLetter");
		var corr = document.createElement("img");
		corr.setAttribute("src","images/correct.png");
		corr.setAttribute("id","correctState");
		corr.setAttribute("style","height:100%;margin-top: -60%;");
		
		var gameArea = document.getElementById("ansImage");
		gameArea.appendChild(corr);
		document.getElementById('ansImage').hidden = false;
		setTimeout(function(){
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("ansImage");
			gA.removeChild(cS);
			nextQuestion();
		}, 1000);
		
	}
	else{
		playAudio("wrongAnswerComplete");
		var corr = document.createElement("img");
		corr.setAttribute("src","images/incorrect.png");
		corr.setAttribute("id","correctState");
		corr.setAttribute("style","height:100%;margin-top: -60%;");
		
		var gameArea = document.getElementById("ansImage");
		gameArea.appendChild(corr);
		document.getElementById('ansImage').hidden = false;
		setTimeout(function(){
			var cS = document.getElementById("correctState");
			var gA = document.getElementById("ansImage");
			gA.removeChild(cS);
		}, 1000);
	}	
	
}

function nextQuestion(){
	var keyBrd = document.getElementById("keyBoard");
	while(keyBrd.firstChild){
		keyBrd.removeChild(keyBrd.firstChild);
	}
	alphabetTest();
}

function returnPage(){
	window.document.location.href = "category.html";
}