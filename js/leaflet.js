if (document.getElementById('centraintro') != null){
    const page = document.getElementById('centraintro').id;
    //Leaflet code voor fitness centra map
    let centraMap = L.map('centraMap').setView([51.20996080570958, 4.417976359773444], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(centraMap);

    //markers voor fitness centra
    let marker1 = L.marker([51.21976713916681, 4.40388206435047]).addTo(centraMap);
    marker1.bindPopup("Basic-Fit Eiermarkt 21").openPopup();
    let marker2 = L.marker([51.21996080570958, 4.417976359773444]).addTo(centraMap);
    marker2.bindPopup("Basic-Fit De Keyserlei 13").openPopup();
    let marker3 = L.marker([51.208219774916294, 4.409665806496447]).addTo(centraMap);
    marker3.bindPopup("Basic-Fit Mechelsesteenweg 138").openPopup();
    let marker4 = L.marker([51.19959065034137, 4.411209938990728]).addTo(centraMap);
    marker4.bindPopup("Basic-Fit Generaal Lemanstraat 5").openPopup();

    var violetIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    let marker5 = L.marker([51.21355742036214, 4.393166299095566], {icon: violetIcon}).addTo(centraMap);
    marker5.bindPopup("Flow Riemstraat 37").openPopup();
    let marker6 = L.marker([51.20839449578472, 4.386816639269733], {icon: violetIcon}).addTo(centraMap);
    marker6.bindPopup("The Brick Waalsekaai 37").openPopup();
} else {
    // Leaflet code voor shops map
    let shopsMap = L.map('shopsMap').setView([50.80996080570958, 4.217976359773444], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(shopsMap);

    // markers voor fitness shops
    let marker7 = L.marker([51.22071122783125, 4.411243302978763]).addTo(shopsMap);
    marker7.bindPopup("Sport Nutrition - Antwerp Fitness shop <br>Lange Nieuwstraat 46").openPopup();
    let marker8 = L.marker([51.21546384944475, 4.398951497218581]).addTo(shopsMap);
    marker8.bindPopup("MUSKLE Antwerp <br>Nationalestraat 63").openPopup();
}


