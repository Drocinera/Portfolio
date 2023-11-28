<template>
    <header>
      <div class="logo-container">
        <img src="Portfolio\src\assets\Logo portfolio.jpg" alt="Logo principal représentant une personne devant un ordinateur avec un chapeau de sorcier sur la tête et tenant une baguette magique pointer sur une lune rouge qu'il tiens dans la main" class="logo-large" />
        <img src="Portfolio\src\assets\Baguette-magique.png" alt="Baguette magique pointant vers le bas" class="logo-small" />
        <!--Aucun affichage d'imgage. -->
      </div>
    </header>
  </template>
  
  <style scoped>
    /* Styles spécifiques au composant Header */
    .logo-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo-large {
      width: 100px; /* Ajustez la taille selon vos besoins */
    }
  
    .logo-small {
      width: 50px; /* Ajustez la taille selon vos besoins */
    }
  </style>