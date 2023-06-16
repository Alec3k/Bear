function smoothScroll(targetSelector) {
    const targetElement = document.querySelector(targetSelector); // Sélectionne l'élément cible
  
    window.scrollTo({
      top: targetElement.offsetTop, // Définit la position de défilement en haut de l'élément cible
      behavior: "smooth" // Active l'effet de défilement en douceur
    });
  }
  