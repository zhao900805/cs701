window.onload = initMap;
var offsetLatitude,offsetLongitude,latitude,longitude,currLatitude,currLongitude,googlePosition;
var counter =1;
var map,marker,path

function initMap() {
    var checkButton = document.getElementById("checkButton");
    checkButton.onclick = getLocation;
}
function getLocation(){
    if (navigator.geolocation) {
        console.log("getLocation!");
        navigator.geolocation.getCurrentPosition(showOnMap);
    }
}
function showOnMap(position){
    var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
    currLatitude = position.coords.latitude;
    console.log(currLatitude);
    currLongitude = position.coords.longitude;
    marker_center = {
        lat:currLatitude,
        lng:currLongitude
    };
    map = new google.maps.Map(document.getElementById('map'), {
          center:{lat:currLatitude,lng:currLongitude},
          zoom: 15
    });
     marker = new google.maps.Marker({
          position: marker_center,
          map: map
    });
    var content = "Lat: " + currLatitude +
                ", Long: " + currLongitude;
    var popupWindowOptions = {
                content: content,
                position: marker_center
    };
    var popupWindow = new google.maps.InfoWindow(popupWindowOptions);

    google.maps.event.addListener(marker, 'click', function() {
                popupWindow.open(map);
    });
    displayLocation(position);
}
function displayLocation(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    currLatitude = latitude;
    currLongitude = longitude;
    path = [{
        lat:latitude,
        lng:longitude
    }];
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("startLatitude").innerHTML = latitude;
    document.getElementById("startLongitude").innerHTML = longitude;
    document.getElementById("currentLatitude").innerHTML = currLatitude;
    document.getElementById("currentLongitude").innerHTML = currLongitude;
    setInterval(updateMyLocation,5000);
}
function updateMyLocation(){
    offsetLatitude = Math.random()/1000;
    offsetLongitude = Math.random()/1000;
    console.log("offsetLatitude:"+offsetLatitude);
    console.log("offsetLongitude:"+offsetLongitude);
    currLatitude = currLatitude+offsetLatitude;
    currLongitude = currLongitude-offsetLongitude;
    counter++;
    document.getElementById("currentLatitude").innerHTML = currLatitude;
    document.getElementById("currentLongitude").innerHTML = currLongitude;
    document.getElementById("counter").innerHTML = counter;
    updateMap();
}
function updateMap(){
    //console.log("updateMap!");
    marker_center = {
        lat:currLatitude,
        lng:currLongitude
    };
    path.push(marker_center);
    var line = new google.maps.Polyline({
                path : path,
                strokeColor : '#0000ff',
                strokeOpacity : 1.0,
                strokeWeight : 3
            });
    line.setMap(map);
    center = new google.maps.LatLng(currLatitude,currLongitude);
    marker.setPosition( center );
    map.panTo( marker_center );
    console.log("we have path: "+path);
}