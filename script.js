

fetch("https://nominatim.openstreetmap.org/search?format=json&q=Gilde Opleidingen", {
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log("API Result:", data);

    const locatie = data[0];
    const lat = locatie.lat;
    const lon = locatie.lon;

    
    const map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup("Neer")
      .openPopup();
})
.catch(error => {
    console.error("Fout bij API request:", error);
});
