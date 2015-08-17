// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.




$('#search-button').click(function (event) {
	event.preventDefault();
	geocoder = new google.maps.Geocoder();
	var locationToSearch = $('#search-input').val();
	            var mapOptions = {
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                address: locationToSearch
            }

    geocoder.geocode( { 'address': locationToSearch}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
        map.setCenter(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });        
    

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  	google.maps.event.addDomListener(window, 'load') 

  $('.search-form').addClass("hideForm")
  $('#map').addClass("showMap")
	//var url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD9gEpTEKcOtamDRPVqD4yqYw0s-o1oknY&q=" + locationToSearch;
	//$.get(url, handleLocation)
});	

//function handleLocation (location) {
//	console.log('Request done!', location);
//	showMap(location);
//}

//function showMap (location) {
//	$('#map').
	
//};
	


if ("geolocation" in navigator) {
  var button = document.getElementById('where-am-i');
  button.addEventListener('click', getLocation);
} else {
  alert("Geolocation is not available")
}

function getLocation(event) {
  event.preventDefault(); 
  console.log('Getting location...'); 
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onLocation (position) {
  console.log("Got it!");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  displayMap(lat, lon);
}

function onError(error) {
  console.log("Getting location failed: " + error);
}


function displayMap(lat, lon) {
  //var urlRoot = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD9gEpTEKcOtamDRPVqD4yqYw0s-o1oknY&q=";
  //var url = urlRoot + lat + "," + lon;
	var latlng = new google.maps.LatLng(lat, lon);
    var mapOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    google.maps.event.addDomListener(window, 'load', displayMap);

	
	var marker = new google.maps.Marker({
    	position: latlng,
    	map: map
    });
    marker.setMap(map);

  $('.search-form').addClass("hideForm")
  $('#map').addClass("showMap")
}





