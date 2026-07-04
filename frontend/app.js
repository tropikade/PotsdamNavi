
ч// =========================
// PotsdamNavi App Core
// =========================

let markers = [];

window.onload = function () {
  initMap();
};

// категории
function setCategory(cat) {
  clearMarkers();

  if (cat === "all") {
    loadPlaces();
    return;
  }

  fetch("data/places.json")
    .then(res => res.json())
    .then(data => {
      data
        .filter(p => p.category === cat)
        .forEach(addPlace);
    });
}

// загрузка всех мест
function loadPlaces() {
  fetch("data/places.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(addPlace);
    });
}

// добавление маркера
function addPlace(place) {

  const marker = L.marker([place.lat, place.lng]).addTo(map);

  marker.bindPopup(`
    <b>${place.name}</b><br/>
    ⭐ ${place.rating}<br/>
    ${place.description}
  `);

  markers.push(marker);
}

// очистка карты
function clearMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

// поиск
document.getElementById("search").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  clearMarkers();

  fetch("data/places.json")
    .then(res => res.json())
    .then(data => {
      data
        .filter(p => p.name.toLowerCase().includes(value))
        .forEach(addPlace);
    });
});
