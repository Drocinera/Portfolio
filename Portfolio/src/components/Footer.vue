<template>
    <footer>
      <div class="social-icons">
        <a href=https://www.linkedin.com/in/théo-pichonneau-53b113258/ target="_blank" rel="noopener noreferrer">
          <img src="src/assets/images/linkedin.png" alt="Logo Linkedin par Freepik"> 
        </a>
        <a href="https://github.com/Drocinera" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/images/signe-github.png" alt="Logo Github par Dave Gandy" class="github"> 
        </a>
        <a href="https://discord.com/users/lumiere_sombre" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/images/discord.png" alt="Logo Discord par Freepik" class="discord">
        </a>
      </div>
        <small>Dernière mise à jour: {{ lastUpdated }}</small>
    </footer>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
    setup() {
      const lastUpdated = ref('')
  
      onMounted(() => {
        updateLastUpdated()
      })
  
      const updateLastUpdated = () => {
        const date = new Date()
        lastUpdated.value = `${date.toLocaleDateString()}`
      }
  
      return {
        lastUpdated,
      }
    },
  }
  </script>
  
  <style scoped>
  footer {
    background: linear-gradient(to top, #537895 10%, #0f056b 100%);
    display: flex ;
    flex-direction: column;
    padding-top: 1em;
    margin-top: 1em;
    margin-bottom: -1em;


  }

  .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  img {
    display: flex;
    width: 2em;
    height: 2em;
    background-color: white;
    border-radius: 100%;
    transition: transform .1s;
  }

  .github {
    background-color: #7f00ff ;
  }

  .discord {
    background-color: #ffd700;
  }
  
  img:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.5);
  }

  a {
    padding-left: 0.05em;
    padding-right: 0.05em;
    padding-bottom: 0.05em;
    color: white;
    margin-right: 1em;
    
  }

  small {
    display: flex;
    justify-content: center;
    color: #ffd700;
    margin-top: 0.5em;
  }
  </style>