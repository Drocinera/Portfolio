<template>
    <header>
      <div class="logo-container">
        <img src="/src/assets/images/Logo-portfolio.jpg" alt= "Logo avec une personne portant un chapeau de sorcier face a un ordinateur. Elle tiens une baguette magique diriger vers une lune rouge dans sa main gauche" class="logo-large" />
        <img src="/src/assets/images/Baguette-magique.png" alt="Baguette magique pointant vers le bas. (Angeles Balaguer)" class="logo-small" />
      </div>
    </header>
  </template>
  
  <style scoped>
    .logo-container {
      display: grid;
      flex-direction: column;
    }
  
    .logo-large {
      width: 10em; 
      padding-left: 0.25em;
    }
  
    .logo-small {
    width: 2em; 
    transform: rotate(18deg); 
    transform-origin: center; 
    filter:brightness(200%);



    }
  </style>