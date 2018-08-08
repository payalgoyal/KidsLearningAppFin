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
// To be continud	
	if(page=='11'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/K.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/K/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/K/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/K/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/K/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='12'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/L.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/L/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/L/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/L/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/L/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='13'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/M.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/M/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/M/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/M/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/M/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='14'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/N.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/N/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/N/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/N/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/N/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='15'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/O.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/O/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/O/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/O/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/O/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='16'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/P.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/P/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/P/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/P/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/P/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='17'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Q.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Q/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Q/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Q/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Q/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='18'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/R.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/R/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/R/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/R/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/R/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='19'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/S.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/S/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/S/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/S/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/S/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='20'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/T.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/T/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/T/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/T/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/T/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='21'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/U.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/U/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/U/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/U/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/U/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='22'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/V.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/V/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/V/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/V/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/V/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='23'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/W.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/W/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/W/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/W/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/W/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='24'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/X.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/X/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/X/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/X/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/X/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
	}
	if(page=='25'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Y.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Y/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Y/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Y/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Y/jug.png' style='width:100%;height:40%'>\
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
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Z.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Z/jacket.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Z/jeep.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JACKET</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >JEEP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Z/joker.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Z/jug.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>JOKER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>JUG</span>\
		</div>\
		";
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