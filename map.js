
// ======================================
// PotsdamNavi Map Engine v1.0
// ======================================

let map;
let userMarker;

function initMap() {

    map = L.map('map', {
        zoomControl: true
    }).setView([52.3906, 13.0645], 13);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap'
        }
    ).addTo(map);

    addPotsdamMarker();

    locateUser();

}

function addPotsdamMarker() {

    const marker = L.marker([52.3906,13.0645]).addTo(map);

    marker.bindPopup(`
        <h2>🏛 Potsdam</h2>
        <b>PotsdamNavi</b><br><br>

        ⭐ Достопримечательности<br>
        ❤️ Избранное<br>
        💬 Отзывы<br>
        📷 Фото<br>
        🧭 Построить маршрут
    `);

}

function locateUser(){

    if(!navigator.geolocation){
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            userMarker = L.circleMarker([lat,lng],{

                radius:10

            }).addTo(map);

            userMarker.bindPopup("📍 Вы здесь");

        },

        function(){

            console.log("Геолокация отключена");

        }

    );

}

function flyToPotsdam(){

    map.flyTo([52.3906,13.0645],15,{
        duration:2
    });

}
