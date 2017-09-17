function myMap() {
    var myLatLng = {lat: 43.6600106, lng:-79.3948345};
    var mapOptions = {
        center: new google.maps.LatLng(43.6600106,-79.3948345),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.Map
    }
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
    marker.setMap(map);
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}