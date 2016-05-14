//master js file 
//important varaiables 
var avgLng = 0;
var avgLat = 0; 

var nameadr = {
	name: [].
	adr:  []
};

var nameLatLng = {
	name: [],
	lat: [],
	lng: []
	
}

function adrToLatLng(){
	for(i=0;i<=nameadr.name.length;i++){
		var latLgn = function(address){
		var myGeocoder = new.maps.Geocoder();
		myGeocoder.geocode({'address': address}, function(results, status) {
			
			if(status == google.maps.GeocoderStatus.OK) {
				var latitude = results[i].geometry.location.lat();
				var longitude = results[i].geometry.location.lng();
				nameLatLng.name[i]= nameadr.name[i];
				nameLatLng.lat[i]=latitude;
				nameLatLng.Lng[i]=longitude;
				
			}
		}
	}
}





function findAvgLat() {
		var length = nameadr.length;
		var total = 0;
		var avg;
		var x = 0;
		while ( x + 1 <= length) {
		total += nameadr[x];
		x++
		}
		avgLat = total / length;
	}
function findAvgLng () {
		var length = nameadr.length;
		var total = 0;
		var avg;
		var x = 0;
		while ( x + 1 <= length) {
		total += nameadr[x];
		x++
		}
		avgLng = total / length;
	}



function markerMaker(nameLatLng){
	var numOfMakers = nameLatLng.name.length;
	for (i = 0; i<=numOfMarkers; i++){
		
		markersLoc.push({lat:namLatLng.lat[i], lng:nameLatLng.lng[i]})
		title.push(makersLoc.name[i])
	}
	var markersLoc = [];
	var title = [];
	
	for(i=l; i<=numOfMakers; i++){
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
	});
	
}

function cleanSlateProtocol (){
	findAvgLat();
	findAvgLng();
	while(avgLat = 0  || avgLng = 0){
		continue;
	}
	initMap();
	markerMaker();
}
	


function initMap(){
	var mapDiv = document.getElementById('map');
	var mapOptions = {
		zoom = 8,
		center = {lat: avgLat, lng: avgLng};
	}
	
	var map = new google.maps.Map(mapDiv, mapOptions);
	
	
}


