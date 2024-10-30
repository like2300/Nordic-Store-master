 // Automatisation du slider
 let currentSlide = 1;
 const totalSlides = 5;
 
 setInterval(() => {
   document.getElementById(`s${currentSlide}`).checked = true;
   currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
 }, 3000); // 3000 ms = 3 secondes pour chaque slide
 
 