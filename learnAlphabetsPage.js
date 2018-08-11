var pageNumber;
function learnAlphabetsPage(page){
	pageNumber = page;
	if(page=='1'){
		document.getElementById('prevButton').style.visibility = 'hidden';
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
	if(page=='11'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/K.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/K/kangaroo.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/K/key.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>KANGAROO</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >KEY</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/K/kite.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/K/knife.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>KITE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>KNIFE</span>\
		</div>\
		";
	}
	if(page=='12'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/L.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/L/lion.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/L/lamp.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>LION</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >LAMP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/L/lizard.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/L/leg.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>LIZARD</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>LEG</span>\
		</div>\
		";
	}
	if(page=='13'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/M.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/M/monkey.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/M/moon.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>MONKEY</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >MOON</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/M/mango.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/M/mouse.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>MANGO</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>MOUSE</span>\
		</div>\
		";
	}
	if(page=='14'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/N.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/N/nest.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/N/net.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>NEST</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >NET</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/N/nightingale.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/N/nail.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>Nightingale</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>NAIL</span>\
		</div>\
		";
	}
	if(page=='15'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/O.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/O/onion.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/O/owl.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>ONION</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >OWL</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/O/orange.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/O/octopus.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>ORANGE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>OCTOPUS</span>\
		</div>\
		";
	}
	if(page=='16'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/P.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/P/parrot.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/P/pumpkin.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>PARROT</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >PUMPKIN</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/P/pan.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/P/penguin.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>PAN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>PENGUIN</span>\
		</div>\
		";
	}
	if(page=='17'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Q.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Q/queen.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Q/quilt.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>QUEEN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >QUILT</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Q/quail.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Q/quetzal.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>QUAIL</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>QUETZAL</span>\
		</div>\
		";
	}
	if(page=='18'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/R.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/R/rabbit.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/R/rat.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>RABBIT</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >RAT</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/R/rain.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/R/rainbow.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>RAIN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>RAINBOW</span>\
		</div>\
		";
	}
	if(page=='19'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/S.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/S/sun.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/S/shoe.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>SUN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >SHOE</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/S/strawberry.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/S/snake.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>STRAWBERRY</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>SNAKE</span>\
		</div>\
		";
	}
	if(page=='20'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/T.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/T/tiger.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/T/tomato.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>TIGER</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >TOMATO</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/T/tree.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/T/toy.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>TREE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>TOY</span>\
		</div>\
		";
	}
	if(page=='21'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/U.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/U/umbrella.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/U/urn.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>UMBRELLA</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >URN</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/U/utensil.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/U/uniform.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>UTENSIL</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>UNIFORM</span>\
		</div>\
		";
	}
	if(page=='22'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/V.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/V/van.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/V/vase.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>VAN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >VASE</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/V/violin.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/V/vegetable.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>VIOLIN</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>VEGETABLE</span>\
		</div>\
		";
	}
	if(page=='23'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/W.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/W/watermelon.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/W/watch.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>WATERMELON</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >WATCH</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/W/wolf.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/W/whale.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>WOLF</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>WHALE</span>\
		</div>\
		";
	}
	if(page=='24'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/X.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/X/xylophone.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/X/xenop.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>XYLOPHONE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >XENOP</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/X/xmasTree.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/X/xray.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>XMAS TREE</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>XRAY</span>\
		</div>\
		";
	}
	if(page=='25'){
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Y.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Y/yak.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Y/yoyo.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>YAK</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >YO YO</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Y/yolk.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Y/yarn.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>YOLK</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>YARN</span>\
		</div>\
		";
	}
	if(page=='26'){
		document.getElementById('nextButton').disabled = 'true';
		document.getElementById('letter').innerHTML = "<img src='images/Letters/Z.png' style='width:15%;height:20%;margin:10px'>";
		document.getElementById('letterFor').innerHTML = "<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Z/zebra.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Z/zipper.png' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>ZEBRA</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor' >ZIPPER</span>\
		</div>\
		<div style='float:left;width:50%'>\
		<img src='images/alphabetsImages/Z/zero.png' style='width:100%;height:40%'>\
		</div>\
		<div style='float:right;width:50%'>\
		<img src='images/alphabetsImages/Z/zinnia.jpg' style='width:100%;height:40%'>\
		</div>\
		<div style='text-align:center;width:50%;float:left'>\
		<span class='wordFor'>ZERO</span>\
		</div>\
		<div style='text-align:center;width:50%;float:right'>\
		<span class='wordFor'>ZINNIA</span>\
		</div>\
		";
	}
}

function returnPage(){
	pageNumber = parseInt(pageNumber) - 1;
	window.document.location.href = "category.html";
}

function prevPage(){
	pageNumber = parseInt(pageNumber) - 1;
	window.document.location.href = "learnAlphabets.html?page="+pageNumber;
}

function nextPage(){
	pageNumber = parseInt(pageNumber) + 1;
	window.document.location.href = "learnAlphabets.html?page="+pageNumber;
}