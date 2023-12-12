<template>
    <div class="not-found-container">
      <img src="/src/assets/images/image-404.jpg" alt="404 Image by Jeff Finley">
      <h1>404</h1>
      <h2>OOPS</h2>
        <p>Il semblerai que la magie nest pas été trouver
          <button @click="goBack">Cliquez ici</button> pour revenir en zone connue </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
  </script>
  
  <style scoped>
  .not-found-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; 
    z-index: 9999; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 10em;
    height: 10em;
  }  
  </style>

Pour tenter de regler le problème : 
Crée une page views "Home" qui contient tout les composants de la page app.vue sauf header et navigation 
Mettre header et navgation dans app.vue