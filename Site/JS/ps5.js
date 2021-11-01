fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})


item=[]
idps5=0;


window.onload = function() {origin();};

canvas = document.getElementById('imageps5');
context = canvas.getContext('2d');
imageObj = new Image();

imageObj.src = 'images/ps5/ps5.png';

function origin() {
  context.drawImage(imageObj,0,0,canvas.width,canvas.height)
};

function imagebase() {
    imageObj.src = "/Site/images/ps5/ps5.png";
    imageObj.onload = event => {
        context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
    };
}

function draw () {
    context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
}

p1=p2=p3=p4=p5=0;

var jd;
savejd="noir";
function joystickd(jd) {
  savejd=jd;
  p1=0;
  if (jd=="rouge") {
    imageObj.src="images/ps5/joydrouge.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="vert") {
    imageObj.src="images/ps5/joydvert.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="bleu") {
    imageObj.src="images/ps5/joydbleu.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="noir") {
    imageObj.src="images/ps5/joyd.png";
    imageObj.onload = event => {draw()}
    p1=0
  }
  calculprix()
}

var jg;
savejg="noir";
function joystickg(jg) {
  savejg=jg;
  p2=0;
  if (jg=="rouge") {
    imageObj.src="images/ps5/joygrouge.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="vert") {
    imageObj.src="images/ps5/joygvert.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="bleu") {
    imageObj.src="images/ps5/joygbleu.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="noir") {
    imageObj.src="images/ps5/joyg.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
}

var bt;
var savebt='blanc';
function btn(bt) {
  savebt=bt;
  p3=0;
  if (bt=="rouge") {
    imageObj.src="images/ps5/btnrouge.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="vert") {
    imageObj.src="images/ps5/btnvert.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="bleu") {
    imageObj.src="images/ps5/btnbleu.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="blanc") {
    imageObj.src="images/ps5/btn.png";
    imageObj.onload = event => {draw()}
    p3=0
  }
  calculprix()
}

var back;
var saveback='blanc';
function fond(back) {
  saveback=back;
  p4=0;
  if (back=="rouge") {
    imageObj.src="images/ps5/fondrouge.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="vert") {
    imageObj.src="images/ps5/fondvert.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="bleu") {
    imageObj.src="images/ps5/fondbleu.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="blanc") {
    imageObj.src="images/ps5/fond.png";
    imageObj.onload = event => {draw()}
    p4=0
  }
  calculprix()
}

var crx;
var savecroix="blanc";
function croix(crx) {
  savecroix=crx;
  p5=0;
  if (crx=="rouge") {
    imageObj.src="images/ps5/croixrouge.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="vert") {
    imageObj.src="images/ps5/croixvert.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="bleu") {
    imageObj.src="images/ps5/croixbleu.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="blanc") {
    imageObj.src="images/ps5/croix.png";
    imageObj.onload = event => {draw()}
    p5=0
  }
  calculprix()
}

function resetall() {
  imageObj.src="images/ps5/btn.png";
  imageObj.onload = event => {draw();
    imageObj.src="images/ps5/joyg.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/ps5/joyd.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/ps5/fond.png";
        imageObj.onload = event => {draw();
          imageObj.src="images/ps5/croix.png";
          imageObj.onload = event => {draw()};};};};
  };
  p1=p2=p3=p4=p5=0
  calculprix()
}


prix=50;
function calculprix() {
    prix=50 + p1 + p2 + p3 + p4 + p5 ;
    document.getElementById("prixps5").innerHTML = "Prix : " + prix +"€"
}

function addcart (){
    itemps5=new manette("PS5",saveback,savejd,savejg,savebt,savecroix,idps5,prix);
    item=JSON.stringify(itemps5);
    localStorage.setItem("idps5",idps5)
    localStorage.setItem("panierps5"+idps5,item);
    idps5=idps5+1;
    alert("L'article a été ajouté au panier !")
}


class manette{

  constructor(modele,fond,joystickdroit,joystickgauche,bouton,croixdir,id,prix){
      this.modele = modele;
      this.fond = fond;
      this.joystickdroit = joystickdroit;
      this.joystickgauche = joystickgauche;
      this.bouton = bouton;
      this.croixdir = croixdir;
      this.prix = prix;
      this.idps5 = idps5;
  }
}