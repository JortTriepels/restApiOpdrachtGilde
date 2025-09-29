


async function doStuff() {
    try {
        const response = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=Gilde Opleidingen", {
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        console.log("API Result:", data);

        let wantedLocation = "marathonlaan";

        document.getElementById("enterButton").onclick = function () {
            wantedLocation = document.getElementById("textBox").value;
        };

        const locatie = data.find(item =>
            item.display_name.toLowerCase().includes(wantedLocation.toLowerCase())
        );

        if (locatie) {
            const lat = locatie.lat;
            const lon = locatie.lon;
            plaatsMarkerOpKaart(lat, lon, wantedLocation);
        }

    } catch (error) {
        console.error("Fout bij API request:", error);
    }
}

function plaatsMarkerOpKaart(lat, lon, locationName) {
    const map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lon])
        .addTo(map)
        .bindPopup(locationName.toLowerCase())
        .openPopup();
}


//it shall be done huzaahh
doStuff();
