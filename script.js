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

const content = "Alice Sales";
const text = document.getElementById('text');

const speed = 200
let cont = -2;

function typeWriter() {
  if(cont < content.length) {
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }
  else {
    text.textContent = content;
    cont = 0;
  }
}

typeWriter()

/* EFEITO NOS VIDEOS */

const video = document.querySelector(".video")

video.addEventListener('mouseenter', e => {
  video.play()
})

video.addEventListener('mouseout', e => {
  video.pause()
})