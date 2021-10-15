
console.log

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


var jd
function joystickd(jd) {
  savejd=jd
  if (jd==1) {
    document.getElementById("joyd").src="images/ps5/joydrouge.png";
  }
  if (jd==2) {
    document.getElementById("joyd").src="images/ps5/joydvert.png";
  }
  if (jd==3) {
    document.getElementById("joyd").src="images/ps5/joydbleu.png";
  }
}

var jg
function joystickg(jg) {
  savejg=jg
  if (jg==1) {
    document.getElementById("joyg").src="images/ps5/joygrouge.png";
  }
  if (jg==2) {
    document.getElementById("joyg").src="images/ps5/joygvert.png";
  }
  if (jg==3) {
    document.getElementById("joyg").src="images/ps5/joygbleu.png";
  }
}

var bt
function btn(bt) {
  savebt=bt
  if (bt==1) {
    document.getElementById("btn").src="images/ps5/btnrouge.png";
  }
  if (bt==2) {
    document.getElementById("btn").src="images/ps5/btnvert.png";
  }
  if (bt==3) {
    document.getElementById("btn").src="images/ps5/btnbleu.png";
  }
}

var back
function fond(back) {
  saveback=back
  if (back==1) {
    document.getElementById("ps5f").src="images/ps5/fondrouge.png";
  }
  if (back==2) {
    document.getElementById("ps5f").src="images/ps5/fondvert.png";
  }
  if (back==3) {
    document.getElementById("ps5f").src="images/ps5/fondbleu.png";
  }
}


