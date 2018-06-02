mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzcGFja2QiLCJhIjoiY2o2d2h6NW50MTdjMDM0cGc2a2FhYnJnNiJ9.76PWXna1302wDBZm-8mhcQ';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v10',
    center: [-122.6587, 45.5122],
    zoom: 8
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
map.addControl(new mapboxgl.NavigationControl());