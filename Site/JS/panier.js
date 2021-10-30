fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})


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
        document.getElementById("somme_livraison").innerHTML=fdl +"€" ;
    }
    
    function calculDateLivraison (){ 
        var dateControl = document.querySelector('input[type="date"]');
        var today = new Date().toISOString().substring(0, 10);
        
        today = today.split('-');
        today_annee = parseInt(today[0]);
         today_mois = parseInt(today[1]);
         today_jours = parseInt(today[2]);
        
         dateControl1=dateControl.value 
         dateControl1 = dateControl1.split('-');
         dateControl1_annee = parseInt(dateControl1[0]);
         dateControl1_mois = parseInt(dateControl1[1]);
         dateControl1_jours = parseInt(dateControl1[2]);
        
         diff_mois= (dateControl1_mois-today_mois);
         if (diff_mois==1){
             diffDuMoisApres=dateControl1_jours;
             diffDuMoisAvant=31-today_jours;
             totalHeures=(diffDuMoisAvant+diffDuMoisApres)*24;
            }else {
                totalHeures=(dateControl1_jours-today_jours)*24;
            }
        if (totalHeures<73){
            livraisonExpress=true;
            document.getElementById("optionexpress").innerHTML="Oui"
        }
        if (totalHeures<0){
                livraisonExpress=false;
                document.getElementById("optionexpress").innerHTML="Livrason impossible"
        }
        if (totalHeures>73){
            livraisonExpress=false;
            document.getElementById("optionexpress").innerHTML="Non"
        
        }
        
        
        console.log(today) ;
         console.log(dateControl.value) ;
         document.getElementById("date0").innerHTML=typeof today;
         document.getElementById("ppp").innerHTML=  today;
         document.getElementById("fff").innerHTML=  dateControl1_annee;
         document.getElementById("kkk").innerHTML=  livraisonExpress;
         document.getElementById("lll").innerHTML=  totalHeures;
        }
        


