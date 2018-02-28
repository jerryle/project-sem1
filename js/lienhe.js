
// lienhe.html
//Google Map API

var mapLatLngArray = [
    [21.028774,105.781745],
    [21.028774,120.781745],
    [16.028774,105.781745]
];

var curCard = 0;
var cards = document.getElementsByClassName('slotcard');

[].slice.apply(cards).forEach(function (card, index) {
    card.addEventListener('click', function (e) {

        var x = mapLatLngArray[index][0];
        var y = mapLatLngArray[index][1];

        var myCenter = new google.maps.LatLng(x,y);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 15};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        if ( !card.classList.contains('address-active')) card.classList.add('address-active');

        curCard = index;
        clearCurColor();
    });
});

function clearCurColor() {
    [].slice.apply(cards).forEach(function (card, index) {
        if (card.classList.contains('address-active') && curCard !== index) card.classList.remove('address-active');

    });
}


function initMap() {
    var myCenter = new google.maps.LatLng(21.028774,105.781745);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
}

