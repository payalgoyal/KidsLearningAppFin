var pageNumber;
function learnAlphabetsPage(page){
	pageNumber = page;
	if(page=='1'){
		document.getElementById('prevButton').disabled = 'true';
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
	if(page=='26'){
		document.getElementById('nextButton').disabled = 'true';
	}
}

function prevPage(){
	pageNumber = parseInt(pageNumber) - 1;
	window.document.location.href = "learnNumbers.html?page="+pageNumber;
}

function nextPage(){
	pageNumber = parseInt(pageNumber) + 1;
	window.document.location.href = "learnNumbers.html?page="+pageNumber;
}