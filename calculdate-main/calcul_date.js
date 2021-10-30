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
}
if (totalHeures<0){
        livraisonExpress=false;
}
if (totalHeures>73){
    livraisonExpress=false;

}


console.log(today) ;
 console.log(dateControl.value) ;
 document.getElementById("date0").innerHTML=typeof today;
 document.getElementById("Ajd").innerHTML=  today;
 document.getElementById("year").innerHTML=  dateControl1_annee;
 document.getElementById("expres").innerHTML=  livraisonExpress;
 document.getElementById("hour").innerHTML=  totalHeures;
}
