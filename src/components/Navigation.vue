<template>
   <nav>
    <ul class="nav-item">
      <a href="#introduction">Qui-suis-je ?</a>
    </ul>
    <ul class="nav-item">
      <a href="#projet">Créations</a>
    </ul>
    <ul class='nav-item'>
      <a href="#Contact">Contact</a>
    </ul>
  </nav>
  </template>

<script setup>
/* Detection de la navigation active en fonction de la section atteinte par le défilement*/
const handleScroll = () => {
  const sections = document.querySelectorAll('section');
  let currentSectionId = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

    if (isVisible) {
      currentSectionId = section.id;

      const anchorLink = document.querySelector(`a[href="#${currentSectionId}"]`);
      if (anchorLink) {
        anchorLink.classList.add('active-link');
      }
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const anchorSectionId = anchor.getAttribute('href').substring(1);
    if (anchorSectionId !== currentSectionId) {
      const section = document.getElementById(anchorSectionId);

      const anchorLink = document.querySelector(`a[href="#${anchorSectionId}"]`);
      if (anchorLink) {
        anchorLink.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', handleScroll);
</script>
  
  <style scoped>

    nav {
      display: flex;
      flex-direction: row;
      margin-bottom: 0.5em;
    
    }
    .nav-item {
      font-size: small;
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px;
      height: min-content;

      filter: contrast(200%);
      align-self: flex-end;
    }

    a {
      text-decoration: none;
      color: #26F0F1;
    }

    .active-link {
      text-decoration: underline;
      color:red
    }

  </style>
