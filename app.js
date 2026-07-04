
// =========================
// PotsdamNavi v1.0
// =========================

// Координаты центра Потсдама
const map = L.map('map').setView([52.3906, 13.0645], 13);

// Карта OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Маркер
const marker = L.marker([52.3906, 13.0645]).addTo(map);

marker.bindPopup(`
<h2>🏛 Potsdam</h2>
<p>Добро пожаловать в PotsdamNavi!</p>
<b>Скоро здесь появятся:</b>
<ul>
<li>⭐ Достопримечательности</li>
<li>🏨 Отели</li>
<li>☕ Кофейни</li>
<li>🍽 Рестораны</li>
<li>🚶 Маршруты</li>
<li>🤖 AI гид</li>
</ul>
`).openPopup();

// Кнопка
document.getElementById("routeBtn").addEventListener("click", function(){

    map.setView([52.3906,13.0645],15);

    marker.openPopup();

});
