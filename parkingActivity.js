var parkingLevel;
function parkingActivity(val){
	parkingLevel = val;
	document.getElementById('entrance').innerHTML = "<img src='images/alphabetsImages/C/car.png' style='width:40%;position:absolute;bottom:0;right:30%'/>\
		<p id='queryCarNumber' style='color:#a94442;position:absolute;font-size:4em;bottom:0;right:50%'>1</p>";
	if (val=='1'){
		document.getElementById('parkingLot').innerHTML = "<div style='width:20%;float:left'>\
		<div class='parking' id='parking1' style='height:10%;width:8px;background-color:#fff;margin-left:20%;position:absolute'></div>\
		<span style='color:#a94442;font-size:4em;margin-left:30%'>1</span>\
	</div>\
	<div style='width:20%;float:left'>\
		<div class='parking' id='parking2' style='height:10%;width:8px;background-color:#fff;margin-left:20%;position:absolute'></div>\
		<span style='color:#a94442;font-size:4em;margin-left:30%'>2</span>\
	</div>\
	<div style='width:20%;float:left'>\
		<div class='parking' id='parking3' style='height:10%;width:8px;background-color:#fff;margin-left:20%;position:absolute'></div>\
		<span style='color:#a94442;font-size:4em;margin-left:30%'>3</span>\
	</div>\
	<div style='width:20%;float:left'>\
		<div class='parking' id='parking4' style='height:10%;width:8px;background-color:#fff;margin-left:20%;position:absolute'></div>\
		<span style='color:#a94442;font-size:4em;margin-left:30%'>4</span>\
	</div>\
	<div style='width:20%;float:left'>\
		<div class='parking' id='parking5' style='height:10%;width:8px;background-color:#fff;margin-left:20%;position:absolute'></div>\
		<span style='color:#a94442;font-size:4em;margin-left:30%'>5</span>\
	</div>\
	";
	}
	
	startup();
}

function startup() {
  el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  // el.addEventListener("touchend", handleEnd, false);
  // el.addEventListener("touchcancel", handleCancel, false);
  // el.addEventListener("touchmove", handleMove, false);
  // log("initialized.");
}

var imageData;
var ongoingTouches = [];

function handleStart(evt) {
  evt.preventDefault();
  // log("touchstart.");
 alert(evt.changedTouches[0].pageY)
}

function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      // log("continuing touch "+idx);
	  
	  // if (leftIndex != null && list[0].traversed[leftIndex] == false){
		  // if (ongoingTouches[idx].pageY > 300 && ongoingTouches[idx].pageY < 500){
			  ctx.beginPath();
			   // log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
			  ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
			  // log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
			  ctx.lineTo(touches[i].pageX, touches[i].pageY);
			  ctx.lineWidth = 4;
			  ctx.strokeStyle = color;
			  ctx.stroke();

			  ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
			  // log(".");
		  // }
	  // }
	 
     
    } else {
      // log("can't figure out which touch to continue");
    }
  }
  
}

function handleEnd(evt) {
  evt.preventDefault();
  // log("touchend");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;
   
  
   
   correct = 0;
  leftIndex = null;
  rightIndex = null;
  end = 1;
  // list[0].traversed[leftIndex] = true;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
		// if ((ongoingTouches[idx].pageX > 250) && (ongoingTouches[idx].pageX < 260)){
			  // ctx.lineWidth = 4;
			  // ctx.fillStyle = color;
			  // ctx.beginPath();
			  // ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
			  // ctx.lineTo(touches[i].pageX, touches[i].pageY);
			  // ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
			  ongoingTouches.splice(idx, 1);  // remove it; we're done
		// }
    } else {
      // log("can't figure out which touch to end");
    }
  }
}

function handleCancel(evt) {
  evt.preventDefault();
  // log("touchcancel.");
  var touches = evt.changedTouches;
  
  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}

function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  // log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}

function copyTouch(touch) {
  return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
}

function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;
    
    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}



function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart": 
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":        
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}