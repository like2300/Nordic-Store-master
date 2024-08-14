const loader = document.querySelector(".screen_loader");
const loader2 = document.querySelector(".screen_loader2");
const nextButton = document.querySelector(".next");

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    // Initialisation de AOS
    AOS.init();
    // config tailwind
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
    // Vérifiez si l'utilisateur a déjà visité le site
    if (!localStorage.getItem("hasVisited")) {
      loader2.classList.add("hidden");
      loader.classList.remove("hidden", "translate-y-70", "transition-all");
      // L'utilisateur visite le site pour la première fois

      nextButton.addEventListener("click", () => {
        localStorage.setItem("hasVisited", "true");
        loader.classList.add("hidden", "translate-y-70", "transition-all");
      });
    } else {
      setTimeout(function () {
        loader2.classList.add("hidden");
        loader2.classList.add("tranlate-y-70");
        loader2.classList.add("transition-all");
      }, 3000);
    }
  });
});
