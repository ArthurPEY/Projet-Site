manettePS5 = [
    {
        jdroit : "blanc",
        jgauche : "blanc",
        fond : "blanc",
        boutons:"blanc",
        croix:"blanc",
        qtite:"0",
        prix:"70 "
    }
]


function affichermanette() {
let template = document.getElementById("manette_ps5");

for (const p of manettePS5) { // itère sur le tableau
    let clone = document.importNode(template.content, true); // clone le template
    
        newContent = clone.firstElementChild.innerHTML // remplace {{modèle}} // et {{couleur}} par
            .replace(/{{jdroit}}/g, p.jdroit) // leur valeur
            .replace(/{{jgauche}}/g, p.jgauche)
            .replace(/{{fond}}/g, p.fond)
            .replace(/{{boutons}}/g, p.boutons)
            .replace(/{{croix}}/g, p.croix)
            .replace(/{{qtite}}/g, p.qtite)// leur valeur

            clone.firstElementChild.innerHTML = newContent

        document.body.appendChild(clone); // On ajoute le clone créé
}
}
function recupadress() {
    adress = document.getElementById("adresse").value;
    console.log("1")
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoiYXJ0aHVwIiwiYSI6ImNrdW5zZ3JjMjBidnIyd3FybGZmeWgydm8ifQ.MEgNYhco5LuBrDYGmKn8OQ`)
        .then(res => res.json())
        .then(data => {
            coord = data.features[0].center;
            long=coord[0];
            lat=coord[1];
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)}%2C${encodeURIComponent(lat)}%3B4.8593999%2C45.7611438?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoiYXJ0aHVwIiwiYSI6ImNrdW5zZ3JjMjBidnIyd3FybGZmeWgydm8ifQ.MEgNYhco5LuBrDYGmKn8OQ`)
                .then(res2 => res2.json())
                .then(data2 => {
                    dist = data2.routes[0].distance;
                    calculfdl(dist)
        });
    });
    
};
    
function calculfdl(dist) {
        fdl = 0;
        if (dist>20000) {
            fdl = 5 + 0.07*dist/1000
            fdl = Math.round(fdl)
        }
        document.getElementById("somme_livraison").innerHTML=fdl + "€" ;
    }
    


