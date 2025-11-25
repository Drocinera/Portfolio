<template>
  <header>
    <div class="logo-container">
      <img src="../assets/images/Logo-portfolio.jpg" alt="Logo avec une personne portant un chapeau de sorcier face à un ordinateur. Elle tient une baguette magique dirigée vers une lune rouge dans sa main gauche" 
        class="logo-large" @click="scrollToTop" 
        title="Défilement vers le haut"/>
      <img src="../assets/images/Baguette-magique.png" alt="Baguette magique pointant vers le bas. (Angeles Balaguer)" 
        class="logo-small" @click="scrollToBottom" 
        title="Défilement vers le bas"/>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>

.logo-container {
  display: flex;
}

.logo-large {
  width: 10em;
  padding-left: 0.25em;
  cursor: pointer;
}

.logo-small {
      width: 3em;
    transform: rotate(18deg);
    transform-origin: center;
    filter: brightness(200%);
    cursor: pointer;
    height: 5em;
}
</style>
