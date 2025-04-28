function toggleMenu() {
   let mobMen = document.getElementById('mobMen');
   let menu = document.getElementById('menu');

   mobMen.classList.toggle('active');
   menu.classList.toggle('show');
   }

 // Certificates Slide Image

 document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const fadeSlides = document.querySelectorAll('.fade-slide');
  const total = fadeSlides.length;

  function showSlide(index) {
    fadeSlides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
  }

  setInterval(() => {
    showSlide(slideIndex);
    slideIndex = (slideIndex + 1) % total;
  }, 3000);

  showSlide(slideIndex);
});



 // Home Slide Image
 const slides = document.querySelectorAll('.slide');
 const dots = document.querySelectorAll('.dot');
 let currentIndex = 0;
 let slideInterval;

 function showSlide(index) {
   slides.forEach((s, i) => {
     s.classList.toggle('active', i === index);
     dots[i].classList.toggle('active', i === index);
   });
   currentIndex = index;
 }

 // Manual click on dots
 dots.forEach(dot => {
   dot.addEventListener('click', () => {
     const index = parseInt(dot.getAttribute('data-index'));
     showSlide(index);
     resetTimer(); // restart timer after click
   });
 });

 // Auto-slide every 3 seconds (9000 ms)
 function startTimer() {
   slideInterval = setInterval(() => {
     const nextIndex = (currentIndex + 1) % slides.length;
     showSlide(nextIndex);
   }, 9000);
 }

 function resetTimer() {
   clearInterval(slideInterval);
   startTimer();
 }

 startTimer();

 // Scroll to top button
 const toTopBtn = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
