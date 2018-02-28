
// lienhe.html
//Google Map API

var mapLatLngArray = [
    [21.028774,105.781745],
    [10.771889, 106.704297],
    [50.444928, 30.525974]
];

var curCard = 0;
var cards = document.getElementsByClassName('slotcard');
var cardtexts = document.getElementsByClassName('card-comp-text');

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

<<<<<<< HEAD
=======
        //zoom
>>>>>>> 74b904f7a9501152e0c446becb9c8adc92845bab
        google.maps.event.addListener(marker,'click',function() {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
        });

<<<<<<< HEAD
        if ( !card.classList.contains('address-active')) {
            card.classList.add('address-active');
            if (card.classList.contains('address-unactive')) card.classList.remove('address-unactive');
        }
=======
        if ( !card.classList.contains('address-active')) card.classList.add('address-active');
>>>>>>> 74b904f7a9501152e0c446becb9c8adc92845bab


        curCard = index;
        changeCurCardText();
        clearCurColor();
    });
});

function changeCurCardText () {
    [].slice.apply(cardtexts).forEach(function (card, index) {
        if (card.classList.contains('jactive') && curCard !== index) {
            card.classList.remove('jactive');
            // if (!card.classList.contains('jactive')) card.classList.add('jactive');
        }
        else if(!card.classList.contains('jactive') && curCard === index)
        {
            card.classList.add('jactive');
        }

    });

}

function clearCurColor() {
    [].slice.apply(cards).forEach(function (card, index) {
        if (card.classList.contains('address-active') && curCard !== index) {
            card.classList.remove('address-active');
            if (!card.classList.contains('address-unactive')) card.classList.add('address-unactive');
        }

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

