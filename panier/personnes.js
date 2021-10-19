manette = [
    {
        nom : "ps5",
        jdroit : "blanc",
        jgauche : "blanc",
        fond : "blanc"
    },
    
    {
        nom : "ps5",
        jdroit : "blanc",
        jgauche : "vert",
        fond : "blanc"
    },
    
    {
        nom : "ps5",
        jdroit : "blanc",
        jgauche : "blanc",
        fond : "blanc"
    }
]


function affichermanette() {
let template = document.getElementById("tempmanette");

for (const p of manette) { // itère sur le tableau
    let clone = document.importNode(template.content, true); // clone le template
    
        newContent = clone.firstElementChild.innerHTML // remplace {{modèle}}

            .replace(/{{nom}}/g, p.nom) // et {{couleur}} par
            .replace(/{{jdroit}}/g, p.jdroit) // leur valeur
            .replace(/{{jgauche}}/g, p.jgauche) // leur valeur

            clone.firstElementChild.innerHTML = newContent

        document.body.appendChild(clone); // On ajoute le clone créé
}
}
