<template>
    <div class="not-found-container">
      <img src="/src/assets/images/image-404.jpg" alt="404 Image by Jeff Finley">
      <h1>404</h1>
        <h2>OOPS</h2>
          <p>Il semblerait que la magie n'ait pas été trouvée !
            <a @click="goBack">Cliquez ici</a> pour revenir en zone connue .</p>
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
    background-color: #ffffff; 
    z-index: 9999; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 20em;
    height: 20em;
  }  

  a {
    text-decoration: none;
    cursor:pointer;
    color:#0f056b;
  }
  </style>
