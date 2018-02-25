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
