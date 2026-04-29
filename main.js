// popups

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

// sidebar

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  menuBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (sideMenu.contains(e.target) || e.target === menuBtn) return;
  sideMenu.classList.remove("open");
  menuBtn.classList.remove("active");
});

// sidebar popup

const popupData = {
  "#contact": {
    title: "Contact",
    text: "Discord : peteutyvy"
  },
  "#prix": {
    title: "Charte des prix",
    text: `Le prix est en fonction de la complexité or une interface complexe prend plus de temps à réaliser.
    
Basique – 12 à 17€
  • ActionForm simple
  • 1 page, texte + boutons

Avancé – 18 à 39 €
  • Plusieurs boutons dynamiques
  • Disposition non conforme / personnalisée

Complexe – 40 à 60 €
  • Interface très complexe 
  • Animations

Les réalisations affichés ne sont pas disponibles à la vente. Je ne fait que du sur mesure.`
  },
  "#infos": {
    title: "Comment je travaille?",
    text: `Mes outils de travail:
  • Visual Studio Code
  • BlockBench
  • Minecraft Bedrock`
  }
};

function openPopup(hash) {
  const data = popupData[hash];
  if (!data) return;

  document.getElementById("popup_title").textContent = data.title;
  document.getElementById("popup_text").textContent = data.text;

  document.getElementById("sidebar_popup").style.display = "flex";

  const sidebar = document.getElementById("side-menu");
  if (sidebar) {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("active");
  }
}


function closePopup() {
  document.getElementById("sidebar_popup").style.display = "none";
  history.replaceState(null, "", location.pathname);
}

function checkHash() {
  const hash = window.location.hash;
  if (popupData[hash]) {
    openPopup(hash);
  } else {
    closePopup();
  }
}

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", checkHash);