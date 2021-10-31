fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})

item=[]
idswitch=0;


window.onload = function() {origin();};

canvas = document.getElementById('imageswitch');
context = canvas.getContext('2d');
imageObj = new Image();

imageObj.src = 'images/switch/switch.png';

function origin() {
  context.drawImage(imageObj,0,0,canvas.width,canvas.height)
};

function test() {
    imageObj.src = "images/switch/switch.png";
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
    imageObj.src="images/switch/switchjoydrouge.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="vert") {
    imageObj.src="images/switch/switchjoydvert.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="bleu") {
    imageObj.src="images/switch/switchjoydbleu.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="noir") {
    imageObj.src="images/switch/switchjoyd.png";
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
    imageObj.src="images/switch/switchjoygrouge.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="vert") {
    imageObj.src="images/switch/switchjoygvert.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="bleu") {
    imageObj.src="images/switch/switchjoygbleu.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="noir") {
    imageObj.src="images/switch/switchjoyg.png";
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
    imageObj.src="images/switch/switchbtnrouge.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="vert") {
    imageObj.src="images/switch/switchbtnvert.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="bleu") {
    imageObj.src="images/switch/switchbtnbleu.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="blanc") {
    imageObj.src="images/switch/switchbtn.png";
    imageObj.onload = event => {draw()}
    p3=0
  }
  calculprix()
}

var backg;
var savebackg='blanc';
function fondg(backg) {
  savebackg=backg;
  p4=0;
  if (backg=="rouge") {
    imageObj.src="images/switch/switchfondgrouge.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="vert") {
    imageObj.src="images/switch/switchfondgvert.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="bleu") {
    imageObj.src="images/switch/switchfondgbleu.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="orange") {
    imageObj.src="images/switch/switchfondgorange.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="blanc") {
    imageObj.src="images/switch/switchfondg.png";
    imageObj.onload = event => {draw()}
    p4=0
  }
  calculprix()
}


var backd;
var savebackd='blanc';
function fondd(backd) {
  savebackd=backd;
  p6=0;
  if (backd=="rouge") {
    imageObj.src="images/switch/switchfonddrouge.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="vert") {
    imageObj.src="images/switch/switchfonddvert.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="bleu") {
    imageObj.src="images/switch/switchfonddbleu.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="orange") {
    imageObj.src="images/switch/switchfonddorange.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="blanc") {
    imageObj.src="images/switch/switchfondd.png";
    imageObj.onload = event => {draw()}
    p6=0
  }
  calculprix()
}

var crx;
var savecroix="blanc";
function croix(crx) {
  savecroix=crx;
  p5=0;
  if (crx=="rouge") {
    imageObj.src="images/switch/switchcroixrouge.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="vert") {
    imageObj.src="images/switch/switchcroixvert.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="bleu") {
    imageObj.src="images/switch/switchcroixbleu.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="blanc") {
    imageObj.src="images/switch/switchcroix.png";
    imageObj.onload = event => {draw()}
    p5=0
  }
  calculprix()
}

function resetall() {
  imageObj.src="images/switch/switchbtn.png";
  imageObj.onload = event => {draw();
    imageObj.src="images/switch/switchjoyg.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/switch/switchjoyd.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/switch/switchfondd.png";
        imageObj.onload = event => {draw();
            imageObj.src="images/switch/switchfondg.png";
            imageObj.onload = event => {draw();
                imageObj.src="images/switch/switchcroix.png";
                imageObj.onload = event => {draw()};};};};};
  };
  p1=p2=p3=p4=p5=p6=0
  calculprix()
}


prix=70;
function calculprix() {
    prix=70 + p1 + p2 + p3 + p4 + p5 ;
    document.getElementById("prixswitch").innerHTML = "Prix : " + prix +"€"
}

function addcart (){
    itemswitch=new manette("SWITCH",savebackg,savebackd,savejd,savejg,savebt,savecroix,idswitch,prix);
    item=JSON.stringify(itemswitch);
    localStorage.setItem("idswitch",idswitch)
    localStorage.setItem("panierswitch"+idswitch,item);
    idswitch=idswitch+1;
}


class manette{

  constructor(modele,fondd,fondg,joystickdroit,joystickgauche,bouton,croixdir,idswitch,prix){
      this.modele = modele;
      this.fondd = fondd;
      this.fondg = fondg;
      this.joystickdroit = joystickdroit;
      this.joystickgauche = joystickgauche;
      this.bouton = bouton;
      this.croixdir = croixdir;
      this.prix = prix;
      this.idswitch = idswitch;
  }
}

function test() {
  document.getElementById("test").innerHTML = itemswitch
}