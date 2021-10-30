fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})

item=[]
id=0;


window.onload = function() {origin();};

canvas = document.getElementById('imagexbox');
context = canvas.getContext('2d');
imageObj = new Image();

imageObj.src = 'images/xbox/xbox.png';

function origin() {
  context.drawImage(imageObj,0,0,canvas.width,canvas.height)
};

function test() {
    imageObj.src = "images/xbox/xbox.png";
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
    imageObj.src="images/xbox/xboxjoydrouge.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="vert") {
    imageObj.src="images/xbox/xboxjoydvert.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="bleu") {
    imageObj.src="images/xbox/xboxjoydbleu.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="noir") {
    imageObj.src="images/xbox/xboxjoyd.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
}

var jg;
savejg="noir";
function joystickg(jg) {
  savejg=jg;
  p2=0;
  if (jg=="rouge") {
    imageObj.src="images/xbox/xboxjoygrouge.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="vert") {
    imageObj.src="images/xbox/xboxjoygvert.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="bleu") {
    imageObj.src="images/xbox/xboxjoygbleu.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="noir") {
    imageObj.src="images/xbox/xboxjoyg.png";
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
    imageObj.src="images/xbox/xboxbtnrouge.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="vert") {
    imageObj.src="images/xbox/xboxbtnvert.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="bleu") {
    imageObj.src="images/xbox/xboxbtnbleu.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="blanc") {
    imageObj.src="images/xbox/xboxbtn.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
}

var back;
var saveback='blanc';
function fond(back) {
  saveback=back;
  p4=0;
  if (back=="rouge") {
    imageObj.src="images/xbox/xboxfondrouge.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="vert") {
    imageObj.src="images/xbox/xboxfondvert.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="bleu") {
    imageObj.src="images/xbox/xboxfondbleu.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="blanc") {
    imageObj.src="images/xbox/xboxfond.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
}

var crx;
var savecroix="blanc";
function croix(crx) {
  savecroix=crx;
  p5=0;
  if (crx=="rouge") {
    imageObj.src="images/xbox/xboxcroixrouge.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="vert") {
    imageObj.src="images/xbox/xboxcroixvert.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="bleu") {
    imageObj.src="images/xbox/xboxcroixbleu.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="blanc") {
    imageObj.src="images/xbox/xboxcroix.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
}

function resetall() {
  imageObj.src="images/xbox/xboxbtn.png";
  imageObj.onload = event => {draw();
    imageObj.src="images/xbox/xboxjoyg.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/xbox/xboxjoyd.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/xbox/xboxfond.png";
        imageObj.onload = event => {draw();
          imageObj.src="images/xbox/xboxcroix.png";
          imageObj.onload = event => {draw()};};};};
  };
  p1=p2=p3=p4=p5=0
  calculprix()
}


prix=60;
function calculprix() {
    prix=50 + p1 + p2 + p3 + p4 + p5 ;
    document.getElementById("prixxbox").innerHTML = "Prix : " + prix +"€"
}

function addcart (){
    itemxbox=new manette("xbox",saveback,savejd,savejg,savebt,savecroix,id,prix);
    item.push(JSON.stringify(itemxbox));
    localStorage.setItem("panierxbox",item);
    id=id+1;
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
      this.id = id;
  }
}

function test() {
  document.getElementById("test").innerHTML = itemps5
}