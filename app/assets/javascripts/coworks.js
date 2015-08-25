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
        map.setCenter(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });        
    

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $.get("/coworks_data", function(coworks){
      coworks.forEach(function(cowork){
        var lat = cowork["latitude"];
        var lon = cowork["longitude"];
        var latlng = new google.maps.LatLng(lat, lon); 
        
        var infowindow = new google.maps.InfoWindow({content: '<a href="/coworks/' + cowork["id"]+ '">'+cowork["name"] + "</a>"}
        );
        var marker = new google.maps.Marker({
        position: latlng,
        title: '<a href="/coworks/' + cowork["id"]+ '">'+cowork["name"] + "</a>",
        map: map
        });
        marker.setMap(map);

        marker.addListener('click', function() {
          infowindow.setContent(this.title);
		  infowindow.open(map, this, marker, this);
		  setTimeout(function () { infowindow.close(); }, 5000);
        });	
        })
    });

     
    google.maps.event.addDomListener(window, 'load') 

  $('.search-form').addClass("hideForm")
  $('#map').addClass("showMap")
  $('.header-row').addClass("hideHome")
  $('.header').addClass("showHeader")
  $('#map').toggle();
}); 






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
  var latlng = new google.maps.LatLng(lat, lon);
    var mapOptions = {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $.get("/coworks_data", function(coworks) {
      coworks.forEach(function(cowork) {
      var cowork_lat = cowork["latitude"];
      var cowork_lon = cowork["longitude"];
      var cowork_latlng = new google.maps.LatLng(cowork_lat, cowork_lon);

      var infowindow = new google.maps.InfoWindow({content: '<a href="/coworks/' + cowork["id"] + '">' + cowork["name"] + "</a>"}
      );
      var marker = new google.maps.Marker({
      position: cowork_latlng,
      title: '<a href="/coworks/' + cowork["id"] + '">' + cowork["name"] + "</a>",
      map: map
      });
      marker.setMap(map);

      marker.addListener('click', function() {
        infowindow.setContent(this.title);
        infowindow.open(map, this, marker, this);
        setTimeout(function () { infowindow.close(); }, 5000);
      });        
      })
    });

    google.maps.event.addDomListener(window, 'load', displayMap);

  
  var marker = new google.maps.Marker({
      position: latlng,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      map: map
    });
    marker.setMap(map);

  $('.search-form').addClass("hideForm")
  $('#map').addClass("showMap")
}
