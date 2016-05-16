//master js file 
//important varaiables 


var avgLng = 0;
var avgLat = 0; 
var nameAdr=document.getElementById("nameadr");
var nameLatLng = {
	name: [],
	lat: [],
	lng: []
}
function adrToLatLng(){
	for(i=0;i<=nameAdr.name.length;i++){
		var latLgn = function(address){
		var myGeocoder = new google.maps.Geocoder();
		myGeocoder.geocode({'address': address}, function(results, status) {
			
			if(status == google.maps.GeocoderStatus.OK) {
				var latitude = results[i].geometry.location.lat();
				var longitude = results[i].geometry.location.lng();
				nameLatLng.name[i]= nameAdr.name[i];
				nameLatLng.lat[i]=latitude;
				nameLatLng.Lng[i]=longitude;
			}
		})
	}
}
}

function findAvgLat() {
		var length = nameAdr.length;
		var total = 0;
		var avg;
		var x = 0;
		while ( x + 1 <= length) {
		total += nameAdr[x];
		x++;
		}
		avgLat = total / length;
	}
	
function findAvgLng () {
		var length = nameAdr.length;
		var total = 0;
		var avg;
		var x = 0;
		while ( x + 1 <= length) {
		total += nameAdr[x];
		x++;
		}
		avgLng = total / length;
	}

function markerMaker(nameLatLng){
	var numOfMarkers = nameLatLng.name.length;
	var markersLoc = [];
	var title = [];
	for (i = 0; i<=numOfMarkers; i++){
		markersLoc.push({lat:namLatLng.lat[i], lng:nameLatLng.lng[i]});
		title.push(markersLoc.name[i]);
	}
	
	for(i=l; i<=numOfMarkers; i++){
		marker = new google.maps.Marker({
			position: markersLoc[i],
			title: title[i]
		})
	}
	var circle = new google.maps.Circle({
	  strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: {lat: avgLat,lng: avgLng
	}
	
})
}

function initMap(){
	
	var mapDiv = document.getElementById('map');
	var mapOptions = {
		zoom: 4,
		center: ({lat: 10.0, lng: 10.0})
	}
	
	var map = new google.maps.Map(mapDiv, mapOptions);
}

function cleanSlateProtocol (){
	findAvgLat();
	findAvgLng();
	while(avgLat == 0  || avgLng == 0){
		continue;
	}
	initMap()
	markerMaker(nameAdr);
}
