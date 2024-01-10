// Initialize the map
var map = L.map('map').setView([0, 0], 2);

// Add a tile layer (OpenStreetMap as an example)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// GeoJSON for River Basin
var riverBasinData = {
    "type": "Feature",
    "properties": { "name": "Example River Basin" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [0, 0],
                [0, 10],
                [10, 10],
                [10, 0],
                [0, 0]
            ]
        ]
    }
};

L.geoJSON(riverBasinData, {
    style: { color: 'blue', fillOpacity: 0.2 }
}).addTo(map);

//  GeoJSON for River
var riverData = {
    "type": "Feature",
    "properties": { "name": "Example River" },
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [1, 1],
            [3, 4],
            [6, 8],
            [8, 5]
        ]
    }
};

L.geoJSON(riverData, {
    style: { color: 'blue' }
}).addTo(map);

// Example GeoJSON for Drainage
var drainageData = {
    "type": "Feature",
    "properties": { "name": "Example Drainage" },
    "geometry": {
        "type": "Point",
        "coordinates": [5, 5]
    }
};

L.geoJSON(drainageData).addTo(map);

// Example Marker for a specific location
var customMarker = L.marker([2, 8]).addTo(map);
customMarker.bindPopup("Custom Marker");

// Example for adding a satellite image overlay (replace URL with your satellite data)
var satelliteOverlay = L.imageOverlay('path/to/your/satellite-image.jpg', [[0, 0], [10, 10]]).addTo(map);
