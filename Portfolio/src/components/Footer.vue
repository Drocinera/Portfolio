<template>
    <footer>
      <div class="social-icons">
        <a href=https://www.linkedin.com/in/théo-pichonneau-53b113258/ target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/linkedin.png" alt="Logo Linkedin par Freepik"> 
        </a>
        <a href="https://github.com/Drocinera" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/signe-github.png" alt="Logo Github par Dave Gandy"> 
        </a>
        <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/discord.png" alt="Logo Discord par Freepik">
        </a>
      </div>
      <p>Dernière mise à jour: {{ lastUpdated }}</p>
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
  </style>