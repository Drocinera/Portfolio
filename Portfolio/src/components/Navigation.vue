<template>
    <nav>
      <div class="nav-item">Qui-suis-je ?</div>
      <div class="nav-item">Créations</div>
      <div class="nav-item">Contact</div>
      <div class="nav-item">Vers la magie</div>
    </nav>
  </template>
  
  <style scoped>

    nav {
      display: flex;
      flex-direction: row;
      
    }
    .nav-item {
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px;
      height: min-content;
      background-color: #ffd700; /*Couleur Or*/
      filter: contrast(200%);
      align-self: flex-end;
      
  
    }
  </style>