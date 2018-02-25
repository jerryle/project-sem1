//Google Map API
$ ( function () {
   function initMap() {
        var location = new google.maps.LatLng(21.028802,105.781693);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
   }

   google.maps.event.addDomlistener(window,'load',initMap());
});
// noUI slider
var priceslid = document.getElementById('price-filter');
var range_all_sliders = {
    'min': [     0 ],
    '10%': [   500,  500 ],
    '50%': [  4000, 1000 ],
    'max': [ 10000 ]
};


noUiSlider.create(priceslid, {
    start: [0, 10000],
    connect: [false, true, false],
    range: {
        'min': [     0 ],
        '10%': [   500,  500 ],
        '50%': [  4000, 1000 ],
        'max': [ 10000 ]
    },
    pips: {
        mode: 'range',
        density: 3
    }
});