<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Navigation,
    Title,
    Introduction,
    Projects,
    ContactForm,
    Footer,
  },
};
</script>

<template>
  <div class="menu-container">
    <Header />
    <div class="citation-container">
      <img src="/src/assets/images/Citation-portfolio.PNG" alt="Citation indiquant: La logique vous mènera d'un point A à un point B. L'imagination vous mènera partout. (Albert Einstein)" class="citation" >
    </div>
    <Navigation />
  </div>
  <div>
    <Title title="Portfolio de Pichonneau Théo" subtitle="Développeur web et web mobile " />
    <Introduction introduction="Présentation" />
    <Projects projectTitle="CV" imageSrc="/src/assets/images/CV.PNG"/>
    <Projects projectTitle="Cahier des charges" imageSrc="/src/assets/images/Cahier-des-charges.PNG" />
    <Projects projectTitle="Dynamiser un espace commentaire" imageSrc="/src/assets/images/Dynamiser-un-espace-commentaire.PNG"/>
    <ContactForm />
    <Footer/>  
  </div>
</template>

<style>
  @import "./assets/main.css";

  .menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:bottom;
    background-color: #0f056b; /*Bleu nuit*/
  }

  .citation {
    height: 10em;
    width: 30em;
    padding-right: 3em;
  
  }
</style>