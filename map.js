let map;

function initMap() {
  map = L.map('map').setView([52.3906, 13.0645], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
}
