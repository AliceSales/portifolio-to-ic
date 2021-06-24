let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(numberSlide) {
  showSlides(slideIndex += numberSlide);
}

function currentSlide(numberSlide) {
  showSlides(slideIndex = numberSlide);
}

function showSlides(numberSlide) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let current_circle = document.getElementsByClassName("current_circle");

    if (numberSlide > slides.length) {
        slideIndex = 1
    }

    if (numberSlide < 1) {
        slideIndex = slides.length
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < current_circle.length; i++) {
      current_circle[i].className = current_circle[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  current_circle[slideIndex-1].className += " active";
}

/* EFEITO DIGITAÇÃO */

var content = "Alice Sales";
var text = document.getElementById('text');

let speed = 200
var cont = -3;

function typeWriter () {
  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }else{
    text.textContent = content;
    cont = 0;
  }
}

typeWriter()