var pageNumber;
function learnAlphabetsPage(page){
	pageNumber = page;
	if(page=='1'){
		document.getElementById('prevButton').disabled = 'true';
		document.getElementById('letter').innerHTML = "<img src='images/Letters/A.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/A/apple.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/A/ant.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>APPLE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >ANT</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/A/aeroplane.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/A/axe.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>AEROPLANE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>AXE</span>\
		</div>\
		";
	}
	if(page=='2'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/B.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/B/ball.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/B/banana.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>BALL</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >BANANA</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/B/bear.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/B/butterfly.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>BEAR</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>BUTTERFLY</span>\
		</div>\
		";
	}
	if(page=='3'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/C.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/C/cat.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/C/carrot.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>CAT</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >CARROT</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/C/car.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/C/cake.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>CAR</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>CAKE</span>\
		</div>\
		";
	}
	if(page=='4'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/D.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/D/dog.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/D/duck.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>DOG</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >DUCK</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/D/drum.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/D/donut.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>DRUM</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>DONUT</span>\
		</div>\
		";
	}
	if(page=='5'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/E.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/E/elephant.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/E/eagle.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>ELEPHANT</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >EAGLE</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/E/egg.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/E/eyes.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>EGG</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>EYES</span>\
		</div>\
		";
	}
	if(page=='6'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/F.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/F/fish.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/F/frog.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>FISH</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >FROG</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/F/fan.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/F/fox.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>FAN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>FOX</span>\
		</div>\
		";
	}
	if(page=='7'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/G.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/G/grapes.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/G/Giraffe.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>GRAPES</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >GIRAFFE</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/G/guitar.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/G/gun.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>GUITAR</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>GUN</span>\
		</div>\
		";
	}
	if(page=='8'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/H.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/H/horse.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/H/hat.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>HORSE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >HAT</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/H/house.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/H/helicopter.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>HOUSE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>HELICOPTER</span>\
		</div>\
		";
	}
	if(page=='9'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/I.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/I/igloo.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/I/icecream.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>IGLOO</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >ICE CREAM</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/I/iron.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/I/iguana.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>IRON</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>IGUANA</span>\
		</div>\
		";
	}
	if(page=='10'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/J.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/J/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/J/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/J/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/J/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='26'){
		document.getElementById('nextButton').disabled = 'true';
	}
}

function prevPage(){
	pageNumber = parseInt(pageNumber) - 1;
	window.document.location.href = "learnAlphabets.html?page="+pageNumber;
}

function nextPage(){
	pageNumber = parseInt(pageNumber) + 1;
	window.document.location.href = "learnAlphabets.html?page="+pageNumber;
}