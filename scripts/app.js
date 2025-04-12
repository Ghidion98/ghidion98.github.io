function toggleMenu() {
   let mobMen = document.getElementById('mobMen');
   let menu = document.getElementById('menu');

   mobMen.classList.toggle('active');
   menu.classList.toggle('show');
   }

// Projects Slide Image
function showProject(name) {
   const image = document.getElementById("projectImage");
   const link = document.getElementById("projectLink");
 
   if (name === "Asmara") {
     image.src = "assets/images/Asmara.png";
     link.href = "https://your-asmara-link.com";
   } else if (name === "Habesha") {
     image.src = "assets/images/habesha.png";
     link.href = "https://your-habesha-link.com";
   } else if (name === "Visca") {
     image.src = "assets/images/visca.png";
     link.href = "https://your-visca-link.com";
   }
 }

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