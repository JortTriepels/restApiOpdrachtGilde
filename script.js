

fetch("https://nominatim.openstreetmap.org/search?format=json&q=Gilde Opleidingen", {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log("API Result:", data);

       
        var wantedLocation = "marathonlaan"

        document.getElementById("enterButton").onclick = function(){
            wantedLocation = document.getElementById("textBox").textContent;
            

        }


       

        //const locatie = data.find(item => item.display_name.includes(wantedLocation));
        const locatie = data.find(item => item.display_name.toLowerCase().includes(wantedLocation.toLowerCase()));

        



        if (locatie) {
            //const locatie = data[6];
            const lat = locatie.lat;
            const lon = locatie.lon;





            const map = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);


            L.marker([lat, lon])
                .addTo(map)
                .bindPopup(wantedLocation.toLowerCase())
                .openPopup();
        }
    })
    .catch(error => {
        console.error("Fout bij API request:", error);
    });
