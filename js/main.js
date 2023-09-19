const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

 
}); 

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-0',
    prevEl: '.swiper-button-prev-0',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  
}); 

const swiper3 = new Swiper('.swiper-projetos-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
}); 

const swiper4 = new Swiper('.swiper-projetos-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
});

const swiper5 = new Swiper('.swiper-projetos-3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
});

const swiper6 = new Swiper('.swiper-projetos-4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-4',
    prevEl: '.swiper-button-prev-4',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
});

const swiper7 = new Swiper('.swiper-projetos-5', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-5',
    prevEl: '.swiper-button-prev-5',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
});

// Open the Modal
function openModal() {
  document.getElementById("modal01").style.display = "block";
  document.getElementById("img-modal-01").src = document.getElementById("img01").src;
  document.getElementById("img-modal-02").src = document.getElementById("img02").src;
  document.getElementById("img-modal-03").src = document.getElementById("img03").src;
  document.getElementById("img-modal-04").src = document.getElementById("img04").src;
  document.getElementById("img-modal-05").src = document.getElementById("img05").src;
  document.getElementById("img-modal-06").src = document.getElementById("img06").src;
  document.getElementById("img-modal-07").src = document.getElementById("img07").src;
  document.getElementById("img-modal-08").src = document.getElementById("img08").src;
  document.getElementById("img-modal-09").src = document.getElementById("img09").src;
  document.getElementById("img-modal-10").src = document.getElementById("img10").src;
  document.getElementById("img-modal-11").src = document.getElementById("img11").src;
  document.getElementById("img-modal-12").src = document.getElementById("img12").src;
  document.getElementById("img-modal-13").src = document.getElementById("img13").src;
  document.getElementById("img-modal-14").src = document.getElementById("img14").src;
  document.getElementById("img-modal-15").src = document.getElementById("img15").src;
  document.getElementById("img-modal-16").src = document.getElementById("img16").src;
  document.getElementById("img-modal-17").src = document.getElementById("img17").src;
  document.getElementById("img-modal-18").src = document.getElementById("img18").src;
  document.getElementById("img-modal-19").src = document.getElementById("img19").src;
  document.getElementById("img-modal-20").src = document.getElementById("img20").src;
}

// Close the Modal
function closeModal() {
  document.getElementById("modal01").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}