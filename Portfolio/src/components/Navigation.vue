<template>
   <nav>
    <div class="nav-item">
      <a href="#introduction">Qui-suis-je ?</a>
    </div>
    <div class="nav-item">
      <a href="#projet">Créations</a>
    </div>
    <div class='nav-item'>
      <a href="#Contact">Contact</a>
    </div>
  </nav>
  </template>

<script setup>
const handleScroll = () => {
  const pixel = document.body;
  const sections = document.querySelectorAll('section');
  let currentSectionId = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

    if (isVisible) {
      currentSectionId = section.id;

      const anchorLink = document.querySelector(`a[href="#${currentSectionId}"]`);
      if (anchorLink) {
        anchorLink.classList.add('active');
      }
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const anchorSectionId = anchor.getAttribute('href').substring(1);
    if (anchorSectionId !== currentSectionId) {
      anchor.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', handleScroll);
</script>
  
  <style scoped>

    nav {
      display: flex;
      flex-direction: column;
    
    }
    .nav-item {
      font-size: small;
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px;
      height: min-content;
      background-color: #ffd700; /*Couleur Or*/
      filter: contrast(200%);
      align-self: flex-end;
    }

    a {
      text-decoration: none;
    }

    .active {
      text-decoration: underline;
      color:red
    }

  </style>

  Animaion voulu : Clignotement de contact/ introduction et project lors du clic.
  Essayer de faire comme les messages d'erreur. L'animation n'est pas visible jusqu'a ce que le clic sur un lien soit fait
appronfondir avec le pixel invisible qui permet d'activer le lien actif. Projet ne s'active pas. Introduction surement pas assez grand. 