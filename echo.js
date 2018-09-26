console.log('starting echo');

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
	
  });
};

