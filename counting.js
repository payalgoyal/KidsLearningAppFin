var queryLetter;
	optionKeys = [];
	var list = [];

function counting(){
	document.getElementById("wrapper").setAttribute("style","background-image: url('images/numbers.png');background-size:cover");
	
	document.getElementById("header").innerHTML = "<img src='images/countingHeader.png' style='margin-top:-5%'>";
	list.push({key: 2,
		optionValue: [3,1,2,5,4]});
	list.push({key: 4,
		optionValue: [3,1,2,5,4]});
	list.push({key: 3,
		optionValue: [3,1,2,5,4]});
	list.push({key: 5,
		optionValue: [3,1,2,5,4]});
	list.push({key: 1,
		optionValue: [3,1,2,5,4]});
	list.push({key: 6,
		optionValue: [3,1,6,5,4]});
	list.push({key: 7,
		optionValue: [7,1,2,5,4]});
	list.push({key: 8,
		optionValue: [3,1,2,8,4]});
	list.push({key: 9,
		optionValue: [3,9,2,5,4]});
	list.push({key: 10,
		optionValue: [3,10,2,5,4]});
		
	optionKeys = [];
	ran = Math.floor(Math.random() * list.length);
	var playArea = document.getElementById("play_area");
	playArea.setAttribute("style","width:100%");
	while(playArea.firstChild){
		playArea.removeChild(playArea.firstChild);
	}
	
	var queryDiv = document.createElement("div");
	queryDiv.setAttribute("id","queryDiv");
	queryDiv.setAttribute("style","width:100%;height:auto;float:left");
	playArea.appendChild(queryDiv);
	for (var i=0;i<list[ran].key;i++){
		var query = document.createElement("img");
		query.setAttribute("src","images/apple.png");
		query.setAttribute("style","width:100px;height:80px");
		
		queryArea = document.getElementById("queryDiv");
		queryArea.appendChild(query);
	}
	
	
	for (var inc = 0;inc<list[ran].optionValue.length;inc++){
		optionKeys.push(list[ran].optionValue[inc]);
	}
	
	keyLength = optionKeys.length;
	
	for (var keys=0;keys<keyLength;keys++){
		var key = document.createElement("button");
		key.setAttribute("type","button");
		key.setAttribute("value",optionKeys[keys]);
		key.setAttribute("class","keys");
		key.setAttribute("onclick","registerKey(this)");
		key.innerHTML = optionKeys[keys];
		
		var keyBrd = document.getElementById("keyBoard");
		keyBrd.appendChild(key);
		
		keyBrd.setAttribute("style","text-align:center");		
	}
	queryLetter = list[ran].key;
}
