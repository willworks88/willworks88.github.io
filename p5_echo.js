console.log('starting p5 echo');


var mic;

function setup(){
  mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}



var my_div = document.createElement("div");
	my_div.setAttribute("id","my_div");
	document.body.appendChild(my_div);
	
my_div.innerHTML = "hello";
	
var latlon = {lat: null, lon: null};
	
// check for Geolocation support
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}

window.onload = function() {
  var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
    latlon.lat = startPos.coords.latitude;
    latlon.lon = startPos.coords.longitude;
	
	console.log('lat: '+latlon.lat);
	console.log('lon: '+latlon.lon);
	
	my_div.innerHTML = ""+latlon.lat+" ,"+latlon.lon;
	
	try {
		// Fix up for prefixing
		window.AudioContext = window.AudioContext||window.webkitAudioContext;
		context = new AudioContext();
		my_div.innerHTML += "  audio working";
	  }
	  catch(e) {
		alert('Web Audio API is not supported in this browser');
	  }
	
  });
};

